import ImageText from "./image_text_element"

export default function PourquoiConsulter() {
  const miniCardsContent = [
    {
      image: 'critical-thinking.svg',
      titre: 'Refléchir aux événements de sa vie',
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 1,
    },
    {
      image: 'therapy.svg',
      titre: "Besoin d'accompagnement",
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 2,
    },
    {
      image: 'solitude.svg',
      titre: 'Sentiment de solitude',
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 3,
    },
    {
      image: 'helping-hand.svg',
      titre: "Manque de motivation",
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 4,
    },
    {
      image: 'objectives.svg',
      titre: 'Atteindre ses objectifs plus sereinement',
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 5,
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


        <div className="grid w-[90%] sm:w-[70%] md:w-[60%] lg:w-[90%] px-1 grid-cols-2 gap-y-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-15 mx-auto justify-items-center align-items-center">
          {miniCardsContent.map((content) => (
            <ImageText
              key={'card' + content.card_num}
              image={content.image}
              titre={content.titre}
              background={content.background}
              textColor={content.textColor}
            />
          ))}
        </div>

    </div>
  )
}
