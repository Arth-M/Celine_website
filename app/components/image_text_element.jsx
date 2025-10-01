import Image from 'next/image'

export default function ImageText({ image, titre, texte, background, textColor }) {
  return (
    <div
      className={`${background} ${textColor} w-fit h-fit flex flex-col rounded-2xl mx-2`}
    >
      <Image
        src={`/images/${image}`}
        alt="Icone de téléphone pour indiquer le numéro de téléphone"
        width="40"
        height="40"
        loading="lazy"
        priority={false}
        className='object-scale-down  text-start col-span mx-auto mb-1'
      />
      <p className="text-center text-wrap px-2 font-light text-xs tracking-tight">
        {titre}
      </p>
      {texte ? (<p className="text-center text-wrap px-2 font-light my-5">
        {texte}
      </p>) : (<div className="hidden"></div>)}

    </div>
  )
}
