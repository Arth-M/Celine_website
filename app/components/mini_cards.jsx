import Image from 'next/image'

export default function MiniCards(image, texte) {
  return (
    <div className="w-[170px] h-fit flex flex-col bg-crusta-300 text-crusta-900 rounded-2xl">
      <Image
        src="/images/cognition-color.svg"
        alt="Icone de téléphone pour indiquer le numéro de téléphone"
        width="150"
        height="150"
        loading="lazy"
        priority={false}
        className="object-scale-down text-start col-span mx-auto"
      />
      <p className="text-center text-wrap px-2">Thérapie centrée sur les émotions hohohohoho</p>
    </div>
  )
}
