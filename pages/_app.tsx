import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,        // Animation duration in ms
      easing: 'ease-out',   // Easing function
      once: true,           // Only animate once
      offset: 120,          // Offset from trigger point
      delay: 100,           // Delay before animation starts
    })
  }, [])

  return <Component {...pageProps} />
}