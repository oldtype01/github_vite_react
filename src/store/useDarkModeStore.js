import { create } from 'zustand'

const applyDarkClass = (dark) => {
  document.documentElement.classList.toggle('dark', dark)
}

const getInitialDark = () => {
  const saved = localStorage.getItem('dark')
  if (saved !== null) return saved === 'true'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const initialDark = getInitialDark()
applyDarkClass(initialDark)

const useDarkModeStore = create((set) => ({
  dark: initialDark,
  toggle: () =>
    set((state) => {
      const next = !state.dark
      localStorage.setItem('dark', String(next))
      applyDarkClass(next)
      return { dark: next }
    }),
}))

export default useDarkModeStore
