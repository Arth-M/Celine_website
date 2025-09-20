import CardBelle from "./components/card_belle";
import FirstInfos from "./components/first_infos";
import HeroImage from "./components/hero_image";
import Biography from "./components/biography";
import Psychologue from "./components/psychologue";
import InfosPratiques from "./components/infosPratiques";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      <section id='section-accueil' className="flex-initial">
      <HeroImage />
      <FirstInfos />
      </section>
      <section id='section-biography' className="flex-initial" data-navbarneeded>
        <Biography />
      </section>
      <section id='section-psycho' className="flex-initial">
        <Psychologue />
      </section>
      <section id="section-infos">
        <InfosPratiques />
      </section>
    </main>
  )
}
