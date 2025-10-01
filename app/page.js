import Navbar from './components/navbar'
import HeroImage from './components/hero_image'
import Biography from './components/biography'
import MesMethodes from './components/mes_methodes'
import PourquoiConsulter from './components/pourquoi_consulter'
import Populations from './components/populations'

import InfosPratiques from './components/infosPratiques'

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      <section id="section-accueil" className="flex-initial">
        <HeroImage />
      </section>

      <section
        id="section-biography"
        className="flex-initial lg:scroll-mt-15 -scroll-mt-10"
        data-navbarneeded
      >
        <Biography />
      </section>

      <section id="section-methodes" className="flex-initial scroll-mt-30">
        <MesMethodes />
      </section>

      <div className="container @container mx-auto px-8 mt-45 md:mt-30 lg:mt-20 relative">
        <hr className="border-gray-200 mx-auto dark:border-gray-700 w-3xs md:w-xs lg:w-md my-12" />
      </div>

      <section id="section-pourquoi" className="flex-initial scroll-mt-30">
        <PourquoiConsulter />
      </section>

      <section id="section-populations" className="flex-initial scroll-mt-30">
        <Populations />
      </section>

      <section id="section-infos">
        <InfosPratiques />
      </section>
    </main>
  )
}
