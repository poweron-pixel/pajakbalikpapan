import Link from 'next/link'
import ThemeChanger from './DarkSwitch'
import Container from './container'

export default function Navbar() {
  return (
    <div className="w-full">
      <Container>
        <nav className="container relative flex items-center justify-between px-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}

          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Link
              href="/"
              className="flex items-center space-x-2 text-base font-medium text-black dark:text-gray-100"
            >
              <span>
                <img src="/img/logo.png" alt="N" width="32" height="32" className="w-8" />
              </span>
              <span>Pajak Balikpapan</span>
            </Link>{' '}
          </div>
          <div className=" text-center lg:flex lg:items-center">
            <ThemeChanger />
          </div>
        </nav>
      </Container>
    </div>
  )
}
