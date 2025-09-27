import Image from 'next/image'
import DoctolibButton from './first_infos'

export default function CardBelle() {
  return (
    <div className="absolute -bottom-36 sm:-bottom-25 md:-bottom-15 lg:bottom-15 xl:bottom-25 mx-auto left-0 right-0 w-[40%] min-w-[180px] md:w-[30%] lg:w-[20%] z-40">
      <div className="mx-auto border shadow-lg border-gray-300/30 bg-gray-200/80 h-fit p-(--card-padding) rounded-(--card-radius) [--card-radius:var(--radius-2xl)] [--card-padding:--spacing(0.5)]">
        <div className="mx-auto rounded-[calc(var(--card-radius)-var(--card-padding))] border bg-gray-100 border-gray-200 px-2 pt-3 pb-4">
          {/* bg-[#88ECEB] */}
          <Image
            src="/images/celine_castronovo.webp"
            alt="Une consultation chez le psychologue. Le patient parle de ses émotions, des évènements qu'il vit et la psychologue l'accompagne"
            width="309"
            height="303"
            priority={true} // This disables lazy loading to prioritize the loading for hero section
            className="object-scale-down lg:object-cover rounded-full w-[60%] h-auto mx-auto mb-3 mt-2 border-1 border-teal-700 shadow-sm"
          />
          <p className="tracking-wider text-md text-teal-900 mx-auto text-center w-fit no-wrap">
            Céline Castronovo
          </p>
          <p className="tracking-wide text-teal-900 text-md mx-auto text-center w-fit font-light">
            Psychologue
          </p>
          <p className="text-teal-900 mx-auto text-center w-fit font-extralight mt-2">
            EMDR, TCC
          </p>
          <p className="text-teal-900 mx-auto text-center w-fit font-extralight">
            Émotions, Cognition
          </p>
        </div>
      </div>
    </div>
  )
}
