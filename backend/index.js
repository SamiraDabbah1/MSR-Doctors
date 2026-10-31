require("dotenv").config()

const dns = require("node:dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])

const app = require("./src/app")
const { ConnectDB } = require("./src/db.config")
const routes = require("./src/routes")

const port = process.env.PORT || 1234

const startServer = async () => {
  // Automatic contact delivery works without MongoDB. Auth routes still need it.
  if (process.env.MONGO_URI) await ConnectDB()

  app.use("/api/v1/contact", require("./src/routes/contactRoutes"))
  app.use("/api/v1", routes)

  app.listen(port, () => {
    console.log(`The app is listening at http://localhost:${port}`)
  })
}

startServer()