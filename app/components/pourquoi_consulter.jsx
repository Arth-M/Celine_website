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
          <div className="mx-auto mt-7 sm:mt-5 flex w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] px-1 gap-x-8 sm:gap-x-20 md:gap-x-25 justify-center align-items-center">
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
          {/* <div className="text-teal-800 border-1 border-gray-200 bg-gray-100/70 rounded-2xl p-5 w-fit mx-auto shadow-2xl"> */}
          <div className="text-teal-800 p-5 w-fit mx-auto">
            <p className="@sm:w-xs @md:w-sm @lg:w-md @lg:mx-auto">
              {/* text-[#88ECEB] */}
              Texte copié sur d'autres sites ... <br/>
              Habituellement, on consulte un psy quand « ça ne va pas ».
              La démarche peut être mûrement réfléchie, mais il arrive aussi
              que le contexte soit oppressant...
              Quand votre couple rencontre des difficultés...
              Lorsque l'enfant arrive ou se fait attendre...
              Votre enfant a des difficultés ....

            </p>
          </div>
        </div>

    </div>
  )
}
