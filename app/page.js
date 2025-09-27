import HeroImage from './components/hero_image'
import Biography from './components/biography'
import Psychologue from './components/psychologue'
import InfosPratiques from './components/infosPratiques'
import Navbar from './components/navbar'

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
      <div className="flex-initial">
        <Psychologue />
      </div>
      <section id="section-infos">
        <InfosPratiques />
      </section>
    </main>
  )
}
