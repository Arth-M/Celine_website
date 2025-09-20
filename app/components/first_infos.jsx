import Image from 'next/image'
export default function FirstInfos() {
  return (
    <div className="w-screen grid grid-cols-2 justify-items-center align-items-center mx-auto object-center mt-40 lg:mt-10">
      <a href="https://www.doctolib.fr/psychologue/montpellier/celine-castronovo" rel="keep-params" className="rounded-3xl md:rounded-4xl bg-[url('/images/doctolib.png')] w-25 h-11 md:w-34 md:h-15 bg-contain bg-no-repeat mx-auto" target="_blank"></a>
      <div className="flex justify-center items-center">
        <Image
        src="/images/pin.svg"
              width="30"
              height="30"
              priority={true}  // This disables lazy loading to prioritize the loading for hero section
              className="object-scale-down border-r-4 lg:object-cover "
            />
        <p className="font-light tracking-tight text-teal-900">10 avenue de Toulouse, 34070 Montpellier</p>
      </div>
    </div>
  )
}
