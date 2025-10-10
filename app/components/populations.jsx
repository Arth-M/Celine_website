import ImageText from "./image_text_element"

export default function Populations() {
  const miniCardsContent = [
    {
    image: 'child.svg',
    titre: 'Enfant',
    background: 'bg-transparent',
      textColor: 'text-teal-900',
      card_num: 1,
    },
    {
    image: 'teenagers2.svg',
    titre: 'Adolescent',
    background: 'bg-transparent',
      textColor: 'text-teal-900',
      card_num: 2,
    },
    {
    image: 'students3.svg',
    titre: 'Étudiant',
    background: 'bg-transparent',
      textColor: 'text-teal-900',
      card_num: 3,
    },
    {
    image: 'adults3.svg',
    titre: 'Adulte',
    background: 'bg-transparent',
      textColor: 'text-teal-900',
      card_num: 4,
    },

  ]
  return (
      <div className="relative w-screen p-5 sm:mb-8 mt-25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-250 0 700 320"
          className={`absolute sm:top-1 lg:-top-1 w-sm sm:w-xl lg:w-3xl left-1/2 -translate-x-1/2 -translate-y-[10%] h-fit -z-50 mx-auto`}
          >
          <g transform="scale(1,.75)">
            <path
              d="
              M 18 48
              C 157 42 274 45 364 92
              C 430 109 380 315 270 300
              C 92 281 -174 249 -177 240
              C -233 222 -178 51 -116 54
              Z"
              fill={`#50c823`}
            />
          </g>
        </svg>

        <h2 className="invisible font-semibold tracking-wide">Pour qui ?</h2>
        <div className="z-50 flex flex-nowrap mx-auto px-8 w-[70%] sm:w-[50%] justify-center gap-x-3 sm:gap-x-10">
          {/* text-green-600 */}
          {miniCardsContent.map((content) => (
            <ImageText
              key={'cardPopulation' + content.card_num}
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
