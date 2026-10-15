import type { Metadata } from 'next'
import { profile } from '@/lib/content'

export const metadata: Metadata = {
  title: 'CV',
  description: `CV de ${profile.name} : expérience chez Batigère, formation CESI (CDA, MAALSI), compétences et projets. Téléchargeable en PDF.`,
  alternates: { canonical: '/cv' },
  openGraph: { url: '/cv', title: `CV · ${profile.name}` },
}

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children
}
