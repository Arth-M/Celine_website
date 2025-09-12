import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="container @container w-screen h-fit static">
      <Image
        src="/images/consultation.png"
        alt="Une consultation chez le psychologue. Le patient parle de ses émotions, des évènements qu'il vit et la psychologue l'accompagne"
        priority={true}  // This disables lazy loading to prioritize the loading for hero section
        className="w-screen h-auto @md:object-cover object-scale-down object-top"
        fill={true}
      />
    </div>
  )
}
