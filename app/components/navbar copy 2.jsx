
useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'section-accueil') {
            const wasVisible = isVisible
            const nowVisible = !entry.isIntersecting
            setIsVisible(nowVisible)

            // Only pulse when visibility state changes
            if (wasVisible !== nowVisible) {
              const doctolibButton = document.querySelector("#doctolibButton")
              if (doctolibButton) {
                doctolibButton.classList.add('animate-pulse')
                setTimeout(() => {
                  doctolibButton.classList.remove('animate-pulse')
                }, 500)
              }
            }
          }
        })
      },
      {
        threshold: 0.7,
        rootMargin: '0px',
      }
    )

    const firstSection = document.querySelector('#section-accueil')
    if (firstSection) {
      observer.observe(firstSection)
    }

    return () => {
      if (firstSection) observer.unobserve(firstSection)
      observer.disconnect()
    }
  }, [isVisible])
