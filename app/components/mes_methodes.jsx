import MiniCards from './mini_cards'

export default function MesMethodes() {
  const miniCardsContent = [
    {
      image: 'cognition-color.svg',
      texte: 'Thérapie centrée sur les émotions',
      background: 'bg-crusta-200',
      textColor: 'text-crusta-500',
      card_num: 1,
    },
    {
      image: 'cognition-color.svg',
      texte: 'Thérapie centrée sur les émotions',
      background: 'bg-crusta-200',
      textColor: 'text-crusta-500',
      card_num: 2,
    },
    {
      image: 'cognition-color.svg',
      texte: 'Thérapie centrée sur les émotions',
      background: 'bg-crusta-200',
      textColor: 'text-crusta-500',
      card_num: 3,
    },
    {
      image: 'cognition-color.svg',
      texte: 'Thérapie centrée sur les émotions',
      background: 'bg-crusta-200',
      textColor: 'text-crusta-500',
      card_num: 4,
    },
  ]

  return (
    <div className="relative w-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -left-220 -z-10  md:-left-50 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-sky-300 to-[#88ECEB] opacity-80"
        ></div>
      </div>
      <div className="hidden">
        <div className="flex container @container mx-auto px-8 mt-5 relative">
          <hr className="border-gray-200 invisible dark:border-gray-700 w-20 mt-12 mb-6" />
          <hr className="border-gray-200 invisible dark:border-gray-700 w-20 mt-12 mb-6" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -left-50 -z-10 transform-gpu overflow-hidden px-36 blur-3xl md:invisible"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-sky-500 to-[#88ECEB] opacity-70"
        ></div>
      </div>
        {/* <div className="w-screen  bg-crusta-300 text-crusta-900 p-5 shadow-lg sm:mb-8 my-4">
          <div className="container @container mx-auto px-8 mt-5 relative">
            {/* text-orange-400 */}
            {/* <h2 className="font-semibold tracking-wide">Mes méthodes</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div> */}

        <div className="grid w-[90%] sm:w-[70%] md:w-[60%] lg:w-[90%] px-1 grid-cols-1 gap-y-7 sm:grid-cols-2 lg:grid-cols-4 md:gap-3 mx-auto justify-items-center align-items-center">
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
    </div>
  )
}
