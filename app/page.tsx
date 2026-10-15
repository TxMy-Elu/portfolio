import About from '@/components/site/About'
import Contact from '@/components/site/Contact'
import Hero from '@/components/site/Hero'
import Marquee from '@/components/site/Marquee'
import Nav from '@/components/site/Nav'
import Parcours from '@/components/site/Parcours'
import Projects from '@/components/site/Projects'
import { MotionProvider } from '@/components/site/Reveal'
import Stack from '@/components/site/Stack'
import { profile, seo, siteUrl, skills } from '@/lib/content'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      description: seo.description,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: profile.name,
      givenName: 'Tom',
      familyName: 'Doguet',
      url: siteUrl,
      image: `${siteUrl}/avatars/photo_cv.jpg`,
      email: `mailto:${profile.email}`,
      jobTitle: profile.role,
      worksFor: { '@type': 'Organization', name: 'Batigère' },
      alumniOf: { '@type': 'EducationalOrganization', name: 'CESI' },
      address: { '@type': 'PostalAddress', addressLocality: 'Metz', addressCountry: 'FR' },
      sameAs: [profile.links.linkedin, profile.links.github],
      knowsAbout: skills.flatMap((s) => s.items),
    },
  ],
}

export default function Home() {
  return (
    <MotionProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
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
