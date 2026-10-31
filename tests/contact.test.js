const test = require('node:test')
const assert = require('node:assert/strict')
const express = require('../backend/node_modules/express')
const delivery = require('../backend/src/services/contactDelivery')
const routes = require('../backend/src/routes/contactRoutes')

test('contact API routes delivery and never claims success on failure', async () => {
  const app = express()
  app.use(express.json())
  app.use('/api/v1/contact', routes)
  const server = app.listen(0, '127.0.0.1')
  await new Promise(resolve => server.once('listening', resolve))
  const endpoint = `http://127.0.0.1:${server.address().port}/api/v1/contact`
  const original = delivery.sendContact
  const calls = []
  delivery.sendContact = async (channel, fields) => { calls.push({ channel, fields }) }
  const send = body => fetch(endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)})
  const fields = {fullName:'ישראל ישראלי', email:'test@example.com', phone:'0501234567', message:'מבקשים לתאם ביקור רופא בבית'}
  try {
    assert.equal((await send({...fields, channel:'email'})).status, 202)
    assert.equal((await send({...fields, channel:'whatsapp'})).status, 202)
    assert.deepEqual(calls.map(call => call.channel), ['email','whatsapp'])
    assert.equal(calls[0].fields.fullName, fields.fullName)
    assert.equal(calls[0].fields.message, fields.message)
    assert.equal((await send({...fields, message:"א".repeat(1001), channel:"email"})).status, 400)
    assert.equal((await send({...fields, message:{}, channel:"email"})).status, 400)
    assert.equal((await send({...fields, email:'bad', channel:'email'})).status, 400)
    assert.equal((await send({...fields, channel:'sms'})).status, 400)
    assert.equal(calls.length, 2)
    delivery.sendContact = async () => { throw new delivery.DeliveryNotConfigured('secret internal configuration') }
    const unavailable = await send({...fields, channel:'email'})
    assert.equal(unavailable.status, 503)
    assert.ok(!(await unavailable.text()).includes('secret'))
    delivery.sendContact = async () => { throw new Error('provider token: secret') }
    const failed = await send({...fields, channel:'whatsapp'})
    assert.equal(failed.status, 502)
    assert.ok(!(await failed.text()).includes('secret'))
  } finally {
    delivery.sendContact = original
    await new Promise(resolve => server.close(resolve))
  }
})
