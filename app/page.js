import CardBelle from "./components/card_belle";
import DoctolibButton from "./components/doctolib_button";
import HeroImage from "./components/hero_image";
import Biography from "./components/biography";
import Psychologue from "./components/psychologue";
import InfosPratiques from "./components/infosPratiques";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section id='section-accueil' className="flex-initial">
      <HeroImage />
      <DoctolibButton />
      </section>
      <section id='section-biography' className="flex-initial">
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
