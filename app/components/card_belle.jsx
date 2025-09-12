import Image from 'next/image'

export default function CardBelle() {
  return (
    <div className="container @container mx-auto">
    <div className="mx-auto border border-gray-600 bg-gray-600 w-[40%] @xl:w-[30%] h-fit p-(--card-padding) rounded-(--card-radius) [--card-radius:var(--radius-2xl)] [--card-padding:--spacing(1)]">
      <div className="mx-auto rounded-[calc(var(--card-radius)-var(--card-padding))] border border-gray-200 bg-white px-5 pt-4">
        <Image
          src="/images/celine_castronovo.webp"
          alt="Une consultation chez le psychologue. Le patient parle de ses émotions, des évènements qu'il vit et la psychologue l'accompagne"
          width="309"
          height="303"
          priority={true}  // This disables lazy loading to prioritize the loading for hero section
          className="object-scale-down rounded-full w-[100%] h-auto mx-auto mb-3"
        />
        <p className="mx-auto text-center w-fit no-wrap font-semibold">Céline Castronovo</p>
        <p className="mx-auto text-center w-fit font-light">Psychologue</p>
        <p className="mx-auto text-center w-fit font-extralight">EMDR, TCC</p>
        <p className="mx-auto text-center w-fit font-extralight">Émotions, Cognition</p>
      </div>
      </div>
    </div>
  )
}
