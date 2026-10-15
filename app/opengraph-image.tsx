import { ImageResponse } from 'next/og'
import { profile } from '@/lib/content'

export const alt = `${profile.name} — Du code au pilotage de projet`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const HEADLINE = 'Du code au pilotage de projet.'
const FOOTER = `${profile.name} — ${profile.role} · Batigère × CESI · tom-doguet.app TD.`

async function loadGoogleFont(family: string, text: string) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
  ).text()
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)
  if (!src) throw new Error(`Font not found: ${family}`)
  return (await fetch(src[1])).arrayBuffer()
}

export default async function OpengraphImage() {
  const [geist, serif] = await Promise.all([
    loadGoogleFont('Geist:wght@500', HEADLINE + FOOTER),
    loadGoogleFont('Instrument+Serif:ital@1', 'pilotage'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#f3f2ed',
          color: '#141412',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#6b6963' }}>
          <div style={{ display: 'flex', color: '#141412' }}>
            TD<span style={{ color: '#ff5a1f' }}>.</span>
          </div>
          <div style={{ display: 'flex' }}>tom-doguet.app</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 124, lineHeight: 0.95, letterSpacing: -6 }}>
          <div style={{ display: 'flex' }}>Du code</div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <span style={{ marginRight: 28 }}>au</span>
            <div style={{ display: 'flex', position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: -6,
                  right: -6,
                  bottom: 16,
                  height: 40,
                  background: '#ff5a1f',
                }}
              />
              <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', letterSpacing: -2 }}>pilotage</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>de projet.</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '2px solid rgba(20,20,18,0.12)',
            paddingTop: 24,
            fontSize: 26,
            color: '#6b6963',
          }}
        >
          <div style={{ display: 'flex' }}>
            <span style={{ color: '#141412' }}>{profile.name}</span>&nbsp;— {profile.role}
          </div>
          <div style={{ display: 'flex' }}>Batigère × CESI</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: geist, weight: 500, style: 'normal' },
        { name: 'Instrument Serif', data: serif, weight: 400, style: 'italic' },
      ],
    },
  )
}
