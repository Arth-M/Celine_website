import MiniCards from './mini_cards'

export default function MesMethodes() {
  const miniCardsContent = [
    {
      image: 'emotions4.svg',
      titre: 'Thérapies centrées émotions',
      background: '#f9ceaf',
      rotate: 'rotate-45',
      // background: 'bg-crusta-200 border border-crusta-300',
      textColor: 'text-crusta-950',
      imageClass: 'scale-x-[-1]',
      // texte:
      //   "Les émotions fortes que nous vivons dans nos vies ou notre enfance peuvent rester ancrées en nous et nous mettre en difficultés. Certaines situations que nous avons vécues peuvent nécessiter de se centrer sur les émotions passées qui réapparaissent dans certaines situations et nous empêchent d'avancer sereinement",
      card_num: 3,
    },
    {
      image: 'counselling.svg',
      titre: `TCC - EMDR`,
      background: '#b6eaeb',
      // background: 'bg-foam-100 border border-foam-200',
      textColor: 'text-foam-900',
      rotate: '',
      // texte:
      //   'EMDR, TCC : des thérapies indiquées dans le traitement de certains troubles spécifiques. Après avoir discuté de vos difficultés et de vos objectifs, nous pourrons évaluer si ce genre de thérapie serait adapté à vos besoins.',
      card_num: 2,
    },
    {
      image: 'cognition-color.svg',
      titre: 'Thérapies centrées cognition',
      // texte:
      //   'Mémoire, perception, interactions humain-environnement : certaines difficultés peuvent être liées à nos processus cognitifs courants et nos biais sans que nous nous en apercevions.',
      background: '#f9ceaf',
      // background: 'bg-crusta-200 border border-crusta-300',
      textColor: 'text-crusta-950',
      rotate: 'rotate-180',
      card_num: 1,
    },
  ]

  return (
    <div className="relative w-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -left-240 -top-20 -z-10  sm:-left-70 sm:top-70 md:-left-20 md:top-70 transform-gpu overflow-hidden px-36 blur-3xl"
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
        className="absolute inset-x-0 -left-50 -z-10 transform-gpu overflow-hidden px-36 blur-3xl sm:invisible"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-sky-500 to-[#88ECEB] opacity-70"
        ></div>
      </div>

      <div className="grid mt-10 md:mt-20 w-full lg:w-[70%] px-5 grid-cols-1 gap-y-15 sm:grid-cols-3 gap-x-3 mx-auto justify-items-center align-items-center">
        {miniCardsContent.map((content) => (
          <MiniCards
            key={'difficultes' + content.card_num}
            image={content.image}
            titre={content.titre}
            background={content.background}
            textColor={content.textColor}
            imageClass={content.imageClass}
            rotate={content.rotate}
            className="my-3"
          />
        ))}

      </div>
      <div className="container @container mx-auto px-8 mt-10 relative">
        {/* <h2 className="font-semibold tracking-wider @sm:w-sm @md:w-md @lg:w-lg @lg:mx-auto text-teal-800">
          Mes méthodes
        </h2> */}
        <p className="font-light font-gray-700 @sm:w-sm @md:w-md @lg:w-lg @lg:mx-auto text-teal-800 text-justify">
          Mémoire, perception, interactions humain-environnement : certaines
          difficultés peuvent être liées à nos processus cognitifs courants
          et nos biais sans que nous nous en apercevions.
          <br />
          Les émotions fortes que nous vivons dans nos vies ou notre
          enfance peuvent rester ancrées en nous et nous mettre en difficulté.
          Certaines situations que nous avons vécues peuvent nécessiter de se centrer
          sur les émotions passées qui nous empêchent d'avancer sereinement.
          <br />
          EMDR et TCC sont des thérapies spécifiques indiquées dans le traitement de certains troubles.
          Après avoir discuté de vos difficultés et de vos objectifs, nous pourrons évaluer si ce genre
          de thérapie serait adapté à vos besoins.
        </p>
      </div>
    </div>

  )
}
