import Image from 'next/image'

export default function InfosPratiques() {
  return (
    <div className="w-screen h-fit bg-[#FEFEBF] mt-25">
      <div className="flex flex-wrap">
        <div className="flex flex-col text-teal-900 mx-auto min-w-80 max-w-96 px-4 relative">
          <div className="w-fit relative my-4">
            <h2 className="font-light tracking-wide w-fit text-start">
              Informations pratiques
            </h2>
            <hr className="border-teal-200 mx-auto dark:border-gray-700 w-full mt-2" />
          </div>
          {/* horaires */}
          <div className="flex flex-nowrap gap-x-4 my-2 mt-2">
            <div className="flex gap-x-2 items-center text-sm/6">
              <Image
                src="/images/clock2.svg"
                alt="Icone d'horloge pour décrire les horaires"
                width="20"
                height="20"
                priority={true} // This disables lazy loading to prioritize the loading for hero section
                className="object-scale-down text-start col-span"
              />
            </div>
            <div className="grid grid-cols-2 w-fit gap-x-2 gap-y-1 h-fit justify-center">
              <p className="text-sm/6 w-fit">Lundi et Jeudi</p>
              <p className="text-sm/6 w-fit">10h - 20h</p>
              <p className="text-sm/6 w-fit">Mardi et Vendredi </p>
              <p className="text-sm/6 w-fit">10h - 18h</p>
            </div>
          </div>

          {/* mail */}
          <div className="flex flex-nowrap gap-x-4 my-2">
            <div className="flex gap-x-2 items-center text-sm/6">
              <Image
                src="/images/email2.svg"
                alt="Icone de mail pour indiquer l'adresse mail"
                width="20"
                height="20"
                priority={true} // This disables lazy loading to prioritize the loading for hero section
                className="object-scale-down text-start col-span"
              />
            </div>
            <a
              href="mailto:c.castronovo.34@gmail.com"
              className="text-start text-sm/6"
            >
              c.castronovo.34@gmail.com
            </a>
          </div>

          {/* téléphone */}
          <div className="flex flex-nowrap gap-x-4 my-2">
            <div className="flex gap-x-2 items-center text-sm/6">
              <Image
                src="/images/iphone.svg"
                alt="Icone de téléphone pour indiquer le numéro de téléphone"
                width="20"
                height="20"
                priority={true} // This disables lazy loading to prioritize the loading for hero section
                className="object-scale-down text-start col-span"
              />
            </div>
            <p className="text-start text-sm/6 select-all">+33 615435199</p>
          </div>

          {/* tarifs */}
          <div className="h-fit">
            <div className="w-fit relative my-4">
              <hr className="border-teal-200 mx-auto dark:border-gray-700 w-full mb-2" />
              <p className="text-start text-sm/6">
                Consultation d'une heure : 60 € TTC
              </p>
            </div>
            <p className="text-start text-sm/6">
              Dispositif Santé Psy Étudiants- 45 min : Nécessité de présenter un
              numéro INE
            </p>
          </div>
        </div>
        {/* google map */}
        <div className="mx-auto ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2971325847216!2d3.8646004118297057!3d43.6003545709841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afd200cec417%3A0x176c4f90a36d217f!2sC%C3%A9line%20Castronovo!5e0!3m2!1sfr!2sfr!4v1758445164370!5m2!1sfr!2sfr"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-screen md:w-[400px] px-4 mt-6 lg:mt-16 object-scale-down"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

{
  /* <div className="hidden md:flex-1 mx-auto">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2971325847216!2d3.8646004118297057!3d43.6003545709841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afd200cec417%3A0x176c4f90a36d217f!2sC%C3%A9line%20Castronovo!5e0!3m2!1sfr!2sfr!4v1758445164370!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div> */
}
{
  /* <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600">
  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
</svg> */
}
