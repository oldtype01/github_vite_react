import { create } from 'zustand'

const useTimerStore = create((set, get) => ({
  elapsed: 0,
  running: false,
  _intervalId: null,

  start: () => {
    if (get().running) return
    const id = setInterval(() => {
      set((state) => ({ elapsed: state.elapsed + 10 }))
    }, 10)
    set({ running: true, _intervalId: id })
  },

  stop: () => {
    clearInterval(get()._intervalId)
    set({ running: false, _intervalId: null })
  },

  reset: () => {
    clearInterval(get()._intervalId)
    set({ elapsed: 0, running: false, _intervalId: null })
  },
}))

export default useTimerStore
