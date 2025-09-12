import CardBelle from "./components/card_belle";
import HeroImage from "./components/hero_image";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <section className="flex-initial">
      <HeroImage />
      </section>
      <section className="flex-initial">
      <CardBelle />
      </section>
      <div>
        <h1>Welcome to Next.js!</h1>
        <p>Your app is running successfully.</p>
      </div>
    </main>
  )
}
