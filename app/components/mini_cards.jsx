import Image from 'next/image'

export default function MiniCards({ image, titre, texte, background, textProperty, imageClass, rotate }) {
  return (
    <div
      className={`  relative w-[190px] h-fit flex flex-col mx-2 place-center`}
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 250"
        className={`absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-[10%] w-[250px] h-[180px] z-0 ${rotate} animated-svg`}
      >
        <path d="
          M150,30
          C190,0 240,60 260,120
          C270,170 210,230 150,230
          C90,230 40,190 40,130
          C40,80 100,60 150,30
          Z" fill={`${background}`}/>
      </svg>
      <Image
        src={`/images/${image}`}
        alt=""
        width="100"
        height="100"
        loading="lazy"
        priority={false}
        className={`object-scale-down text-start col-span z-10 mx-auto mb-5 mt-2 ${imageClass}`}
      />
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260" width="200" height="180"> */}


      <p className={`${textProperty} text-center text-lg text-teal-800 text-wrap px-2 font-light tracking-wide mt-2 sm:mt-1 h-[48px]`}>
        {titre}
      </p>
      {texte ? (<p className="text-center text-wrap px-2 font-light my-5">
        {texte}
      </p>) : (<div className="hidden"></div>)}

    </div>
  )
}
