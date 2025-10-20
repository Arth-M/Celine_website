'use client'
import { useState, useEffect } from 'react'
import DoctolibButton from './first_infos'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'section-accueil') {
            setIsVisible(!entry.isIntersecting)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '-50px 0px',
      }
    )

    const firstSection = document.querySelector('#section-accueil')
    if (firstSection) {
      observer.observe(firstSection)
    }

    return () => {
      if (firstSection) observer.unobserve(firstSection)
      observer.disconnect()
    }
  }, [])

  if (isMobileMenuOpen) {
    window.addEventListener('click', function () {
      setIsMobileMenuOpen(false)
    })
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 bg-gray-100 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b border-b-teal-600">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Notification button with bell icon */}

            <span className="sr-only">Rendez-vous Doctolib</span>
            {/* Bell Icon */}
            {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg> */}
            <a
              href="https://www.doctolib.fr/psychologue/montpellier/celine-castronovo"
              rel="keep-params"
              className="rounded-3xl md:rounded-4xl bg-[url('/images/doctolib.png')] w-25 h-11 md:w-34 md:h-15 bg-contain bg-no-repeat mx-auto"
              target="_blank"
            ></a>
          </div>

          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            {/* <div className="flex shrink-0 items-center">
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
            </div> */}
            <div className="inset-y-0 left-0 flex items-center">
              {/* Notification button with bell icon */}

              <span className="sr-only">Rendez-vous Doctolib</span>
              {/* Bell Icon */}
              {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg> */}
              <a
                href="https://www.doctolib.fr/psychologue/montpellier/celine-castronovo"
                rel="keep-params"
                className="rounded-3xl md:rounded-4xl bg-[url('/images/doctolib.png')] w-25 h-11 bg-contain bg-no-repeat mx-auto"
                target="_blank"
              ></a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#section-accueil"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Accueil
                </a>
                <a
                  href="#section-biography"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Qui suis-je ?
                </a>
                <a
                  href="#section-psycho"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Mes méthodes
                </a>
                <a
                  href="#section-infos"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:invisible">
            {/* Mobile menu button with hamburger icon */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-100">
          <a
            href="#section-accueil"
            className="block rounded-md px-3 py-2 text-base font-medium text-teal-800 hover:bg-white/5 hover:text-white text-right"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </a>
          <a
            href="#section-biography"
            className="block rounded-md px-3 py-2 text-base font-medium text-teal-800 hover:bg-white/5 hover:text-white text-right"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </a>
          <a
            href="#section-psycho"
            className="block rounded-md px-3 py-2 text-base font-medium text-teal-800 hover:bg-white/5 hover:text-white text-right"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#section-infos"
            className="block rounded-md px-3 py-2 text-base font-medium text-teal-800 hover:bg-white/5 hover:text-white text-right"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  )
}
