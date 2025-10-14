import Image from 'next/image'
import CardBelle from './card_belle'

export default function HeroImage() {
  return (
    <div className="w-screen h-fit relative">
      <picture>
        <source
          srcSet="/images/consultation_lg_screen.png"
          media="(min-width: 1024px)"
        />
        <Image
          src="/images/consultation.webp"
          alt="Une consultation chez le psychologue. Le patient parle de ses émotions, des évènements qu'il vit et la psychologue l'accompagne"
          priority={true}
          className="w-screen h-fit object-cover 2xl:object-top opacity-50"
          // fill={true}
          width="1521"
          height="787"
        />
      </picture>
      <CardBelle />
    </div>
  )
}
