import Image from 'next/image'

export default function MiniCards({ image, titre, texte, background, textColor }) {
  return (
    <div
      className={`${background} ${textColor} w-[270px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-fit flex flex-col rounded-2xl shadow-lg mx-2`}
    >
      <Image
        src={`/images/${image}`}
        alt="Icone de téléphone pour indiquer le numéro de téléphone"
        width="100"
        height="100"
        loading="lazy"
        priority={false}
        className='object-scale-down  text-start col-span mx-auto mb-5 mt-2'
      />
      <p className="text-center text-wrap px-2 font-semibold tracking-wide mb-5">
        {titre}
      </p>
      {texte ? (<p className="text-center text-wrap px-2 font-light my-5">
        {texte}
      </p>) : (<div className="hidden"></div>)}

    </div>
  )
}
