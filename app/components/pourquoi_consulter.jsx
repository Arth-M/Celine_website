import ImageText from "./image_text_element"

export default function PourquoiConsulter() {
  const miniCardsContent = [
    {
    image: 'solitude.svg',
    titre: 'Sentiment de solitude',
    background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 3,
    },
    {
      image: 'therapy.svg',
      titre: "Besoin d'être accompagné",
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 2,
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
    {
      image: 'critical-thinking.svg',
      titre: 'Refléchir aux événements de sa vie',
      background: 'bg-transparent',
      textColor: 'text-black',
      card_num: 1,
    },
  ]

  let cardsNotOk = miniCardsContent.length % 3 != 0 ? miniCardsContent.length % 3 : false
  const toAdd = cardsNotOk ? [] : null
  while (cardsNotOk) {
    let element = miniCardsContent.pop()
    toAdd.push(element)
    cardsNotOk -= 1
  }

  return (
    <div className="relative w-screen mt-30">
        <div className="container @container mx-auto px-8 mt-5 relative">
          <div className="text-teal-800 bg-transparent w-fit mx-auto mb-7">
            <h2 className="font-semibold tracking-wide @lg:text-center mx-auto">
              Pourquoi consulter ?
            </h2>
          </div>
        </div>

        <div className="grid w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] px-1 grid-cols-3 gap-x-1 sm:gap-15 mx-auto justify-items-center align-items-center">
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
        { toAdd ?
          <div className="mx-auto mt-3 flex w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] px-1 gap-x-10 justify-center align-items-center">
              {toAdd.map((content) => (
              <ImageText
                key={'card' + content.card_num}
                image={content.image}
                titre={content.titre}
                background={content.background}
                textColor={content.textColor}
              />
              ))}
          </div>
          : <div className="hidden"></div>
        }
        <div className="container @container mx-auto px-8 mt-5 relative">
          <div className="text-teal-800 border-1 border-gray-200 bg-gray-100/70 rounded-2xl p-5 w-fit mx-auto shadow-2xl">
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

    </div>
  )
}
