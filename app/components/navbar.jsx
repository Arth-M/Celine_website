'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const hasPulsed = useRef(false)


  useEffect(() => {
    const navDiv = document.querySelector("#nav-div")
    const isMobile = window.innerWidth < 1000; // you can tweak this breakpoint
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'section-accueil') {
            const wasVisible = isVisible
            const nowVisible = !entry.isIntersecting
            setIsVisible(nowVisible)

            if (isVisible) {
              navDiv.classList.remove("opacity-70");
            }

            // Only pulse once when visibility state changes for the first time
            // if (!hasPulsed.current && wasVisible !== nowVisible) {
            //   const navDiv = document.querySelector("#nav-div")
            //   if (navDiv) {
            //     navDiv.classList.add('pulsing')
            //     setTimeout(() => {
            //       navDiv.classList.remove('pulsing')
            //       navDiv.classList.remove('opacity-70')
            //     }, 1000)
            //     hasPulsed.current = true // Mark as pulsed permanently
            //   }
            // }
          }
        })
      },
      {
        threshold: isMobile ? 0.5 : 0.7,
        rootMargin: isMobile ? '0px 0px 0% 0px' : '0px 0px 0% 0px'
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
  }, [isVisible])

  // Handle clicking outside to close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`w-screen fixed top-0 right-0 left-0 z-50 bg-gray-100 py-3 ${
        isVisible ? 'bg-gray-100 border-b border-b-teal-600' : 'bg-transparent'
      }`}
      ref={menuRef}
    >
      <div id='nav-div' className="mx-auto opacity-70 w-screen px-2 md:px-5">
        <div className="relative w-full grid grid-flow-col grid-cols-[minmax(100px,1fr)_minmax(180px,4fr)_minmax(15px,1fr)] lg:grid-cols-[minmax(110px,1fr)_minmax(310px,3fr)_minmax(560px,5fr)] items-center justify-start sm:justify-center">
          <div className="inset-y-0 left-0 flex items-center" id="doctolibButton">
            <span className="sr-only">Rendez-vous Doctolib</span>
            <a
              href="https://www.doctolib.fr/psychologue/montpellier/celine-castronovo"
              rel="keep-params"
              className="rounded-3xl md:rounded-4xl bg-[url('/images/doctolib.png')] sm:w-25 sm:h-11 w-18 h-8 bg-contain bg-no-repeat lg:mx-auto"
              target="_blank"
            ></a>
          </div>

          <div className="flex justify-start items-center wrap-normal">
            <Image
              src="/images/pin.svg"
              alt="Indication sur la localisation du cabinet"
              width="30"
              height="30"
              priority={true} // This disables lazy loading to prioritize the loading for hero section
              className="object-scale-down border-r-4 lg:object-cover"
            />
            <p
              className={`font-light select-all tracking-tight text-teal-900 text-sm ${
                isVisible ? 'text-teal-700' : ' text-teal-900'
              }`}
            >
              10 avenue de Toulouse, 34070 Montpellier
            </p>
          </div>


          <div className="hidden lg:flex items-center justify-end min-w-[559px]">
            <div className="space-x-4 justify-center items-center">
              <a
                href="#section-accueil"
                className={`rounded-md font-light text-sm hover:bg-white/5  ${
                  isVisible ? ('text-teal-700 hover:text-teal-900 hover:font-normal') : (' text-teal-900  hover:text-white')
                }`}
              >
                Accueil
              </a>
              <a
                href="#section-biography"
                className={`rounded-md font-light text-sm hover:bg-white/5 ${
                  isVisible ?  (' text-teal-700 hover:text-teal-900 hover:font-normal') : (' text-teal-900  hover:text-white')
                }`}
              >
                Qui suis-je ?
              </a>
              <a
                href="#section-methodes"
                className={`rounded-md font-light text-sm hover:bg-white/5 ${
                  isVisible ?  (' text-teal-700 hover:text-teal-900 hover:font-normal') : (' text-teal-900  hover:text-white')
                }`}
              >
                Mes méthodes
              </a>
              <a
                href="#section-pourquoi"
                className={`rounded-md font-light text-sm hover:bg-white/5 ${
                  isVisible ?  (' text-teal-700 hover:text-teal-900 hover:font-normal') : (' text-teal-900  hover:text-white')
                }`}
              >
                Pourquoi consulter ?
              </a>

              <a
                href="#section-infos"
                className={`rounded-md font-light text-sm hover:bg-white/5  ${
                  isVisible ?  (' text-teal-700 hover:text-teal-900 hover:font-normal') : (' text-teal-900  hover:text-white')
                }`}
              >
                Informations Pratiques
              </a>
            </div>
          </div>


          <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 lg:invisible">
            {/* Mobile menu button with hamburger icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="relative inline-flex items-center justify-center content-center rounded-md my-auto px-0 text-gray-800 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-50"
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
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} flex justify-end`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-100 w-fit">
          <a
            href="#section-accueil"
            className="block font-light rounded-md px-3 py-2 text-base text-teal-700 hover:bg-white/5 hover:text-teal-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#section-biography"
            className="block font-light rounded-md px-3 py-2 text-base text-teal-700 hover:bg-white/5 hover:text-teal-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Qui suis-je ?
          </a>
          <a
            href="#section-methodes"
            className="block font-light rounded-md px-3 py-2 text-base text-teal-700 hover:bg-white/5 hover:text-teal-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mes méthodes
          </a>
          <a
            href="#section-pourquoi"
            className="block font-light rounded-md px-3 py-2 text-base text-teal-700 hover:bg-white/5 hover:text-teal-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pourquoi consulter ?
          </a>
          <a
            href="#section-populations"
            className="block font-light rounded-md px-3 py-2 text-base text-teal-700 hover:bg-white/5 hover:text-teal-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pour qui ?
          </a>
          <a
            href="#section-infos"
            className="block font-light rounded-md px-3 py-2 text-base text-teal-700 hover:bg-white/5 hover:text-teal-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Informations pratiques
          </a>
        </div>
      </div>
    </nav>
  )
}
