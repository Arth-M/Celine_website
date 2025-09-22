import Image from 'next/image'

export default function InfosPratiques() {
  return (
    <div className="w-screen h-fit bg-[#FEFEBF] mt-25">
      <div className="flex flex-wrap text-teal-900 mx-auto px-8 py-8 relative">
        <div className="flex-1 min-w-80 max-w-80 w-fit">
          <h2 className="font-light tracking-wide w-fit text-start">Informations pratiques</h2>
          <ul role="list" className="mt-3 space-y-3 w-fit text-sm/6 sm:mt-4">
            <li className="flex gap-x-3">
              <p>Consultation d'une heure</p>
              <p>60 € TTC</p>
            </li>
            <li className="flex gap-x-3 w-fit">
              <p>Étudiants</p>
              <p>Dispositif Santé Psy - 45 min <br></br> Nécessité de présenter un numéro INE</p>
            </li>
            <li className="flex gap-x-3 w-fit">
              <Image
                              src="/images/pin.svg"
                              alt="Indication sur la localisation du cabinet"
                              width="30"
                              height="30"
                              priority={true}  // This disables lazy loading to prioritize the loading for hero section
                              className="object-scale-down border-r-4 lg:object-cover"
                            />
              <p>Lundi/Jeudi </p>
              <p>10h - 20h</p>
            </li>
            <li className="flex gap-x-3 w-fit">
              <Image
                              src="/images/pin.svg"
                              alt="Indication sur la localisation du cabinet"
                              width="30"
                              height="30"
                              priority={true}  // This disables lazy loading to prioritize the loading for hero section
                              className="object-scale-down border-r-4 lg:object-cover"
                            />
              <p>Mardi/Vendredi </p>
              <p>10h - 18h</p>
            </li>
            <li className="flex gap-x-3">
              {/* <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600">
                <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg> */}
              Un résumé personnalisé des bonnes pratiques
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2971325847216!2d3.8646004118297057!3d43.6003545709841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afd200cec417%3A0x176c4f90a36d217f!2sC%C3%A9line%20Castronovo!5e0!3m2!1sfr!2sfr!4v1758445164370!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* <div className="hidden md:flex-1 mx-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2971325847216!2d3.8646004118297057!3d43.6003545709841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6afd200cec417%3A0x176c4f90a36d217f!2sC%C3%A9line%20Castronovo!5e0!3m2!1sfr!2sfr!4v1758445164370!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
      </div>
    </div>
  )
}
