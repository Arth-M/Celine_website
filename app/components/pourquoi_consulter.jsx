import MiniCards from './mini_cards'

export default function PourquoiConsulter() {
  const miniCardsContent = [
    {
      image: 'cognition-color.svg',
      texte: 'Thérapie centrée sur les émotions',
      background: 'bg-crusta-200',
      textColor: 'text-crusta-500',
      card_num: 1,
    },
  ]

  return (
    <div className="relative w-screen">

        <div className="container @container mx-auto px-8 mt-5 relative">
          <div className="text-teal-800 border-1 border-gray-200 bg-gray-100/70 rounded-2xl p-5 w-fit mx-auto shadow-2xl">
            <h2 className="font-semibold tracking-wide @lg:text-center mx-auto">
              Pourquoi consulter ?{' '}
            </h2>
            <p className="@sm:w-xs @md:w-sm @lg:w-md @lg:mx-auto">
              {/* text-[#88ECEB] */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>


        {miniCardsContent.map((content) => (
          <MiniCards
            key={'card' + content.card_num}
            image={content.image}
            texte={content.texte}
            background={content.background}
            textColor={content.textColor}
          />
        ))}

    </div>
  )
}
