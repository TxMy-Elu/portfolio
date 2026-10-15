import About from '@/components/site/About'
import Contact from '@/components/site/Contact'
import Hero from '@/components/site/Hero'
import Marquee from '@/components/site/Marquee'
import Nav from '@/components/site/Nav'
import Parcours from '@/components/site/Parcours'
import Projects from '@/components/site/Projects'
import { MotionProvider } from '@/components/site/Reveal'
import Stack from '@/components/site/Stack'

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Aller au contenu
      </a>
      <div className="grain" aria-hidden />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Parcours />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </MotionProvider>
  )
}
