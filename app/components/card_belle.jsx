import Image from 'next/image'
import DoctolibButton from './doctolib_button'

export default function CardBelle() {
  return (
    <div className="absolute -bottom-35 mx-auto left-0 right-0 w-[40%] min-w-[180px] md:w-[30%] 2xl:w-[20%]">
        <div className="mx-auto border border-gray-300/30 bg-white/40 h-fit p-(--card-padding) rounded-(--card-radius) [--card-radius:var(--radius-2xl)] [--card-padding:--spacing(0.5)]">
          <div className="mx-auto rounded-[calc(var(--card-radius)-var(--card-padding))] border bg-teal-500 border-gray-200 px-2 pt-3 pb-4">
            <Image
              src="/images/celine_castronovo.webp"
              alt="Une consultation chez le psychologue. Le patient parle de ses émotions, des évènements qu'il vit et la psychologue l'accompagne"
              width="309"
              height="303"
              priority={true}  // This disables lazy loading to prioritize the loading for hero section
              className="object-scale-down rounded-full w-[60%] h-auto mx-auto mb-3 mt-2 border-1 border-teal-700 shadow-sm"
            />
            <p className="text-teal-900 mx-auto text-center w-fit no-wrap font-semibold">Céline Castronovo</p>
            <p className="text-teal-800 mx-auto text-center w-fit font-light">Psychologue</p>
            <p className="text-teal-700 mx-auto text-center w-fit font-light mt-2">EMDR, TCC</p>
            <p className="text-teal-700 mx-auto text-center w-fit font-light">Émotions, Cognition</p>
          </div>
        </div>
    </div>
  )
}
