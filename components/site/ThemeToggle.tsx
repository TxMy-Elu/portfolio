'use client'

import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer entre thème clair et sombre"
      className="grid size-10 place-items-center rounded-full border border-line text-fg transition-colors hover:bg-fg hover:text-bg"
    >
      <Sun size={16} className="hidden dark:block" />
      <Moon size={16} className="dark:hidden" />
    </button>
  )
}
