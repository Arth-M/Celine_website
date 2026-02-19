'use client'
import Navbar from './_components/navbar'
import HeroImage from './_components/hero_image'
import Biography from './_components/biography'
import MesMethodes from './_components/mes_methodes'
import PourquoiConsulter from './_components/pourquoi_consulter'
import Populations from './_components/populations'
import ArrowUp from './_components/arrowUp'
import { useState } from 'react'

import InfosPratiques from './_components/infosPratiques'

export default function Home() {
  const [codeTrue, setCodeTrue] = useState(false)
  const [userTest, setUserTest] = useState(false)
  const [code, setCode] = useState('')

  const handleCodeSubmit = () => {
    code === '0889' ? setCodeTrue(true) : setUserTest(true)
  }

  if (!codeTrue) {
    return (
      <div className="bg-teal-500 px-5 w-full h-full flex flex-col items-center justify-center">
        <label htmlFor="code" className="text-xl text-white text-center">
          Site en construction. <br></br>Un code est nécessaire pour y accéder
        </label>
        <input
          type="password"
          name="code"
          placeholder="xxxx"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="border border-gray-200 rounded-lg mt-4 px-2 py-1"
        />
        <button
          onClick={handleCodeSubmit}
          className="rounded-xl bg-calypso-400 shadow-calypso-800 shadow-lg hover:bg-calypso-500 hover:-translate-y-0.5 px-3 py-2 text-white font-semibold mt-6 tracking-wide"
        >
          Envoyer
        </button>
        {userTest ? (
          <div className="text-sm text-orange-700 mt-1">
            Il est nécessaire d'entrer le bon code pour continuer
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    )
  } else {
    return (
      <main className="flex flex-col w-screen">
        <Navbar />
        <section id="section-accueil" className="flex-initial not-arrow-up">
          <HeroImage />
        </section>

        <section
          id="section-biography"
          className="flex-initial lg:scroll-mt-15 -scroll-mt-18 not-arrow-up"
          data-navbarneeded
        >
          <Biography />
        </section>

        <section id="section-methodes" className="flex-initial scroll-mt-30">
          <MesMethodes />
        </section>

        <div className="hidden container @container mx-auto px-8 mt-45 md:mt-30 lg:mt-20 relative">
          <hr className="border-gray-200 mx-auto dark:border-gray-700 w-3xs md:w-xs lg:w-md my-12" />
        </div>

        <section id="section-pourquoi" className="flex-initial scroll-mt-10">
          <PourquoiConsulter />
        </section>

        <section id="section-populations" className="flex-initial scroll-mt-30">
          <Populations />
        </section>

        <section id="section-infos">
          <InfosPratiques />
        </section>
        <ArrowUp />
      </main>
    )
  }
}
