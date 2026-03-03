import { create } from 'zustand'

const STORAGE_KEY = 'theme'

function getInitialDark() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyDark(isDark) {
  document.documentElement.classList.toggle('dark', isDark)
}

const useThemeStore = create((set) => {
  const isDark = getInitialDark()
  applyDark(isDark)

  return {
    isDark,
    toggleDark: () =>
      set((state) => {
        const next = !state.isDark
        applyDark(next)
        localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
        return { isDark: next }
      }),
  }
})

export default useThemeStore
