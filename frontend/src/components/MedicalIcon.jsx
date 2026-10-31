export default function MedicalIcon({ name, className = "" }) {
  return <svg className={className} viewBox="0 0 32 32" aria-hidden="true"><use href={`#${name}`} /></svg>
}
