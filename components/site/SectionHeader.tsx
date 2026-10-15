import { Reveal } from './Reveal'

type Props = {
  index: string
  label: string
  children: React.ReactNode
}

export default function SectionHeader({ index, label, children }: Props) {
  return (
    <Reveal className="mb-14 flex flex-col gap-6 border-t border-line pt-6 md:mb-20 md:flex-row md:items-end md:justify-between">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ({index}) {label}
      </span>
      <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
        {children}
      </h2>
    </Reveal>
  )
}
