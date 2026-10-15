import type { MetadataRoute } from 'next'
import { profile, seo } from '@/lib/content'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} · Portfolio`,
    short_name: profile.name,
    description: seo.description,
    start_url: '/',
    display: 'standalone',
    lang: 'fr',
    background_color: '#f3f2ed',
    theme_color: '#141412',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
