'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'section-accueil') {
            setIsVisible(!entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: '0px'
      }
    );

    const firstSection = document.querySelector('#section-accueil');
    if (firstSection) {
      observer.observe(firstSection);
    }

    return () => {
      if (firstSection) observer.unobserve(firstSection);
      observer.disconnect();
    };
  }, []);

  // Handle clicking outside to close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 bg-gray-100 transition-opacity duration-200 ${
      isVisible ? 'bg-gray-100 border-b border-b-teal-600' : 'bg-transparent'
    }`} ref={menuRef}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <span className="sr-only">Rendez-vous Doctolib</span>
            <a href="https://www.doctolib.fr/psychologue/montpellier/celine-castronovo" rel="keep-params" className="rounded-3xl md:rounded-4xl bg-[url('/images/doctolib.png')] w-25 h-11 bg-contain bg-no-repeat mx-auto" target="_blank"></a>
          </div>

          <div className="flex flex-1 items-center justify-between lg:items-stretch lg:justify-between">
            <div className="inset-y-0 left-0 flex items-center">
              <span className="sr-only">Rendez-vous Doctolib</span>
              <a href="https://www.doctolib.fr/psychologue/montpellier/celine-castronovo" rel="keep-params" className="rounded-3xl md:rounded-4xl bg-[url('/images/doctolib.png')] w-25 h-11 bg-contain bg-no-repeat mx-auto" target="_blank"></a>
            </div>
            <div className="flex justify-center items-center mr-14 ml-6 lg:m-0  wrap-normal">
              <Image
                src="/images/pin.svg"
                alt="Indication sur la localisation du cabinet"
                width="30"
                height="30"
                priority={true}  // This disables lazy loading to prioritize the loading for hero section
                className="object-scale-down border-r-4 lg:object-cover"
              />
              <p className={`font-light tracking-tight text-teal-900 text-sm ${
                  isVisible ? 'text-teal-700' : ' text-teal-900'
                  }`}>10 avenue de Toulouse, 34070 Montpellier</p>
            </div>
            <div className="hidden lg:ml-6 lg:flex justify-center items-center">
              <div className="space-x-4 justify-center items-center">
                <a href="#section-accueil" className={`rounded-md font-light text-sm hover:bg-white/5 hover:text-white ${
                  isVisible ? ' text-teal-700' : ' text-teal-900'
                  }`}>Accueil</a>
                <a href="#section-biography" className={`rounded-md font-light text-sm hover:bg-white/5 hover:text-white ${
                  isVisible ? ' text-teal-700' : ' text-teal-900'
                  }`}>Qui suis-je ?</a>
                <a href="#section-psycho" className={`rounded-md font-light text-sm hover:bg-white/5 hover:text-white ${
                  isVisible ? ' text-teal-700' : ' text-teal-900'
                  }`}>Pourquoi consulter ?</a>
                <a href="#section-infos" className={`rounded-md font-light text-sm hover:bg-white/5 hover:text-white ${
                  isVisible ? ' text-teal-700' : ' text-teal-900'
                  }`}>Contact</a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 lg:invisible">
            {/* Mobile menu button with hamburger icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-50"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} flex justify-end`}>
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-100 w-fit">
          <a href="#section-accueil" className="block font-light rounded-md px-3 py-2 text-base text-teal-800 hover:bg-white/5 hover:text-white text-right whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Accueil</a>
          <a href="#section-biography" className="block font-light rounded-md px-3 py-2 text-base text-teal-800 hover:bg-white/5 hover:text-white text-right whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Qui suis-je ?</a>
          <a href="#section-psycho" className="block font-light rounded-md px-3 py-2 text-base text-teal-800 hover:bg-white/5 hover:text-white text-right whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Pourquoi consulter ?</a>
          <a href="#section-infos" className="block font-light rounded-md px-3 py-2 text-base text-teal-800 hover:bg-white/5 hover:text-white text-right whitespace-nowrap" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
