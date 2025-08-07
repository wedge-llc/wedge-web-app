import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedge Golf</title>
        <meta name="description" content="Let's play some golf" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon-primary.png" />
      </Head>

      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Footer */}
      <Footer />
    </>
  )
}