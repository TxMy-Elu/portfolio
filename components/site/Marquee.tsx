import { marquee } from '@/lib/content'

export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-2xl tracking-tight md:text-3xl">
            {item}
            <span className="font-serif text-3xl text-accent-text">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
