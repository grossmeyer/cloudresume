import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const activePage = 'flex py-4 px-2 text-sky-700 font-semibold'
  const otherPage = 'flex py-4 px-2 text-slate-600 hover:text-sky-600 font-semibold transition duration-300'
  const mobileActive = 'flex justify-center py-2 mb-2 text-md bg-sky-900 text-sky-500 w-1/3 rounded-md font-semibold'
  const mobileOther = 'flex justify-center py-2 mb-2 text-md text-white bg-sky-500 w-1/3 rounded-md font-semibold'
  useEffect(() => {
    const button = document.querySelector('button.mobile-menu-button')
    const menu = document.querySelector('.mobile-menu')
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  }, [])

  return (
    <nav className='sticky top-8 z-10 bg-sky-300 backdrop-filter backdrop-blur-sm bg-opacity-20 firefox:bg-opacity-35 transition-colors duration-500 font-main shadow-lg rounded-2xl mx-4'>
      {/* Main Nav Menu */}
      <section className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          {/* Logo */}
          <section className='flex items-center py-4 px-2'>
            <img src='avatar.webp' alt='GlennMeyer.DEV Logo' width='32' height='35' className='w-8 mr-2' />
            <span className='font-semibold text-sky-700 text-lg'>GLENN MEYER</span>
          </section>
          {/* Main Nav Items */}
          <section className='flex'>
            <div className='hidden md:flex items-center space-x-7'>
              <Link href='/'>
                <a className={router.pathname == '/' ? activePage : otherPage}>Home</a>
              </Link>
              <Link href='/resume' >
                <a className={router.pathname == '/resume' ? activePage : otherPage}>Resume</a>
              </Link>
              <Link href='/about' >
                <a className={router.pathname == '/about' ? activePage : otherPage}>About</a>
              </Link>
            </div>
          </section>
          {/* Mobile Menu Button */}
          <section className='md:hidden flex items-center'>
            <button className='outline-none mobile-menu-button' aria-label='Mobile Menu'>
              <svg className='w-6 h-6 text-slate-600 hover:text-sky-600'
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </section>
        </div>
      </section>
      {/* Mobile Nav Menu */}
      <section>
        <div className='hidden mobile-menu'>
          <ul className='flex flex-col items-center'>
            <li className={router.pathname == '/' ? mobileActive : mobileOther}><Link href='/'>Home</Link></li>
            <li className={router.pathname == '/resume' ? mobileActive : mobileOther}><Link href='/resume'>Resume</Link></li>
            <li className={router.pathname == '/about' ? mobileActive : mobileOther}><Link href='/about'>About</Link></li>
          </ul>
        </div>
      </section>
    </nav>
  )
}