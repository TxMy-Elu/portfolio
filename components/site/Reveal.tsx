'use client'

import { motion, MotionConfig, type HTMLMotionProps } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1] as const

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

type RevealProps = HTMLMotionProps<'div'> & { delay?: number; as?: 'div' | 'li' | 'article' }

export function Reveal({ delay = 0, as = 'div', ...props }: RevealProps) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...props}
    />
  )
}
