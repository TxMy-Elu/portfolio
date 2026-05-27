'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Html, Line, OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

/* ─── Données des planètes ─────────────────────────────────────────── */
const PLANETS = [
  { label: 'À propos',     href: '#about',        radius: 1.7, angle: Math.PI * 0.0,  size: 0.15, color: '#00D4FF' },
  { label: 'Technologies', href: '#technologies', radius: 2.4, angle: Math.PI * 0.4,  size: 0.17, color: '#4F6EF7' },
  { label: 'Projets',      href: '#projets',      radius: 3.1, angle: Math.PI * 0.85, size: 0.21, color: '#00D4FF' },
  { label: 'Parcours',     href: '#parcours',     radius: 2.0, angle: Math.PI * 1.3,  size: 0.16, color: '#4F6EF7' },
  { label: 'Contact',      href: '#contact',      radius: 3.7, angle: Math.PI * 1.72, size: 0.19, color: '#00D4FF' },
  { label: 'CV',           href: '#documents',   radius: 2.9, angle: Math.PI * 1.15, size: 0.14, color: '#94A3B8' },
]

/* Position fixe dans le plan XZ */
function planetPos(radius: number, angle: number): THREE.Vector3 {
  return new THREE.Vector3(
    Math.cos(angle) * radius,
    0,
    Math.sin(angle) * radius,
  )
}

/* ─── Soleil ─────────────────────────────────────────────────────── */
function Sun() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((s) => { if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.06 })

  return (
    <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.2}>
      {/* Noyau */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial color="#FFA040" emissive="#FF5500" emissiveIntensity={1.4} roughness={0.5} metalness={0} />
      </mesh>
      {/* Couronne interne */}
      <mesh>
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshBasicMaterial color="#FF7700" transparent opacity={0.10} side={THREE.BackSide} />
      </mesh>
      {/* Couronne externe */}
      <mesh>
        <sphereGeometry args={[1.20, 32, 32]} />
        <meshBasicMaterial color="#FF5500" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>
      {/* Label Soleil */}
      <Html center position={[0, 1.4, 0]} distanceFactor={8}>
        <div style={labelStyle('#FFA040', 'rgba(255,100,0,0.3)')}>Accueil</div>
      </Html>
    </Float>
  )
}

/* ─── Planète ─────────────────────────────────────────────────────── */
function Planet({ label, href, radius, angle, size, color }: typeof PLANETS[0]) {
  const pos = planetPos(radius, angle)

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <group position={pos}>
      <mesh
        onClick={handleClick}
        onPointerOver={() => { document.body.style.cursor = 'pointer' }}
        onPointerOut={() =>  { document.body.style.cursor = 'auto'    }}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>

      {/* Label toujours visible */}
      <Html center position={[0, size + 0.25, 0]} distanceFactor={8}>
        <div
          style={labelStyle(color, `${color}33`)}
          onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
        >
          {label}
        </div>
      </Html>
    </group>
  )
}

/* ─── Anneau d'orbite ─────────────────────────────────────────────── */
function OrbitRing({ radius }: { radius: number }) {
  const points = useMemo<[number, number, number][]>(() => {
    const pts: [number, number, number][] = []
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2
      pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius])
    }
    return pts
  }, [radius])

  return <Line points={points} color="#ffffff" transparent opacity={0.07} lineWidth={0.5} />
}

/* ─── Style label ─────────────────────────────────────────────────── */
function labelStyle(color: string, bg: string): React.CSSProperties {
  return {
    background:    `rgba(5,5,16,0.85)`,
    border:        `1px solid ${color}66`,
    borderRadius:  '6px',
    padding:       '3px 10px',
    color,
    fontSize:      '10px',
    fontWeight:    700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    whiteSpace:    'nowrap',
    cursor:        'pointer',
    userSelect:    'none',
    backdropFilter:'blur(6px)',
    boxShadow:     `0 0 10px ${bg}`,
  }
}

/* ─── Scène principale ───────────────────────────────────────────── */
export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 5, 9], fov: 52 }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={10} color="#FF8800" distance={14} />
      <pointLight position={[0, 0, 0]} intensity={6}  color="#FFA040" distance={8}  />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00D4FF" />

      <OrbitControls
        enableZoom
        enablePan={false}
        autoRotate={false}
        minDistance={5}
        maxDistance={16}
        enableDamping
        dampingFactor={0.06}
      />

      <Stars radius={100} depth={60} count={5000} factor={3} saturation={0} fade speed={0.3} />

      <Sun />

      {PLANETS.map((p) => (
        <OrbitRing key={`ring-${p.label}`} radius={p.radius} />
      ))}
      {PLANETS.map((p) => (
        <Planet key={p.label} {...p} />
      ))}
    </Canvas>
  )
}
