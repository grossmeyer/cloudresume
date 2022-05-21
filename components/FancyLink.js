export default function FancyLink({ href = '/', aria = 'FancyLink Label', text = 'FancyLink Text' }) {
  return (
    <a
      href={href}
      aria-label={aria}
      className='hover:text-slate-600 text-sky-600 font-semibold transition duration-300'>
      {text}
    </a>
  )
}