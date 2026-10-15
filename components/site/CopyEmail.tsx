'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn btn-outline btn-sm font-mono text-xs uppercase tracking-wider"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span aria-live="polite">{copied ? 'Copié' : 'Copier l’adresse'}</span>
    </button>
  )
}
