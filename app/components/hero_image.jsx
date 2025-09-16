import Image from 'next/image'
import CardBelle from './card_belle'

export default function HeroImage() {
  return (
    <div className="w-screen h-fit relative">
      <Image
        src="/images/consultation.webp"
        alt="Une consultation chez le psychologue. Le patient parle de ses émotions, des évènements qu'il vit et la psychologue l'accompagne"
        priority={true}
        className="w-screen h-fit object-cover 2xl:h-[50vh] 2xl:object-top opacity-70"
        // fill={true}
        width="1521"
        height="787"
      />
      <CardBelle />
    </div>
  )
}
