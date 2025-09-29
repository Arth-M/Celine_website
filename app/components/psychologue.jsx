import MiniCards from './mini_cards'

export default function Psychologue() {
  return (
    <div className="relative">
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
      <div className="flex container justify-around w-sm sm:w-md md:w-lg lg:w-4xl mx-auto px-15">
        <hr className="border-gray-200 invisible dark:border-gray-700 w-20 mt-12 mb-6" />
        <hr className="border-gray-200 invisible dark:border-gray-700 w-20 mt-12 mb-6" />
      </div>
      <MiniCards image="cognition-color.svg" texte="Thérapie centrée sur les émotions" background='bg-crusta-200' textColor='text-crusta-500'/>
      <section id="section-pourquoi" className="scroll-mt-30">
        <div className="container @container w-sm sm:w-md md:w-lg lg:w-4xl mx-auto px-8 mt-5 relative">
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
      </section>
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
      <section id="section-methodes" className="scroll-mt-30">
        <div className="w-screen  bg-crusta-300 text-crusta-900 p-5 shadow-lg sm:mb-8 my-4">
          <div className="container @container w-sm sm:w-md md:w-lg lg:w-4xl mx-auto px-8 mt-5 relative">
            {/* text-orange-400 */}
            <h2 className="font-semibold tracking-wide">Mes méthodes</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </section>
      <section id="section-populations" className="scroll-mt-30">
        <div className="w-screen bg-[#CEF2F2]/98 text-teal-700 p-5 shadow-lg sm:mb-8 my-4">
          <div className="container @container w-sm sm:w-md md:w-lg lg:w-4xl mx-auto px-8 mt-5 relative">
            {/* text-green-600 */}
            <h2 className="font-semibold tracking-wide">Pour qui ?</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </section>
    </div>
  )
}
