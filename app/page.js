import CardBelle from "./components/card_belle";
import DoctolibButton from "./components/doctolib_button";
import HeroImage from "./components/hero_image";
import Biography from "./components/biography";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section id='section-1' className="flex-initial">
      <HeroImage />
      <DoctolibButton />
      </section>
      <section id='section-2' className="flex-initial">
        <Biography />
      </section>
    </main>
  )
}
