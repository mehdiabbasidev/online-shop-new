'use client'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false)
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
    }

    return (
        <button
            className={`${isVisible ? 'buttonVisible' : 'button'}`}
            onClick={scrollToTop}
        >
            &#8593;
        </button>
    )
}

export default ScrollToTop
