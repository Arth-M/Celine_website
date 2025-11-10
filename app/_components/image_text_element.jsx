import Image from 'next/image'

export default function ImageText({ image, titre, texte, background, textColor }) {
  return (
    <div
      className={`${background} ${textColor} w-[80px] h-fit flex flex-col rounded-2xl mx-2`}
    >
      <Image
        src={`/images/${image}`}
        alt="Icone de téléphone pour indiquer le numéro de téléphone"
        width="50"
        height="50"
        loading="lazy"
        className='object-scale-down  text-start col-span mx-auto mb-1'
      />
      <p className="text-center text-wrap font-light text-sm tracking-tight">
        {titre}
      </p>


    </div>
  )
}
