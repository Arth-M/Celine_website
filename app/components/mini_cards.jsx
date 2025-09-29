import Image from 'next/image'

export default function MiniCards({ image, texte, background, textColor }) {
  return (
    <div
      className={`${background} ${textColor} w-[170px] h-fit flex flex-col rounded-2xl`}
    >
      <Image
        src={`/images/${image}`}
        alt="Icone de téléphone pour indiquer le numéro de téléphone"
        width="150"
        height="150"
        loading="lazy"
        priority={false}
        className="object-scale-down text-start col-span mx-auto"
      />
      <p className="text-center text-wrap px-2 font-semibold tracking-wide">
        {texte}
      </p>
    </div>
  )
}
