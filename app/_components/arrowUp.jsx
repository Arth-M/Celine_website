"use client"
import Image from "next/image";
import { useState, useEffect } from "react"

export default function ArrowUp() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const section1 = document.querySelector(".not-arrow-up")
    if (!section1) return

    // Observe when section1 leaves the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section1 is NOT visible, show the arrow
        setShowArrow(!entry.isIntersecting)
      },
      { threshold: 0.1 } // Adjust sensitivity: 0 = any pixel, 1 = fully visible
    )

    observer.observe(section1)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-30 right-6 z-90 p-3 rounded-xl shadow transition-all duration-300
        bg-copperfield-500 hover:bg-copperfield-700
        ${showArrow ? "opacity-100 translate-y-0" : "hidden"}`}
      aria-label="Retour en haut"
    >
      <Image
        src="/images/up.svg"
        alt="Logo de Novurba"
        width="15"
        height="15"
        preload="true"
        priority="true"
        className="object-cover h-fit rounded-l-xl text-copperfield-500"
        // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
      />
    </button>
  )
}
