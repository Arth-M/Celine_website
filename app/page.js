import HeroImage from "./components/hero_image";

export default function Home() {
  return (
    <div className="m-0 p-0 w-screen h-screen flex flex-col relative">
      <div>
        <HeroImage />
      </div>
      <div>
        <h1>Welcome to Next.js!</h1>
        <p>Your app is running successfully.</p>
      </div>
    </div>
  )
}
