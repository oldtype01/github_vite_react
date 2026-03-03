import useTimerStore from '../store/useTimerStore'

function formatTime(ms) {
  const minutes = String(Math.floor(ms / 60000)).padStart(2, '0')
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0')
  const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0')
  return `${minutes}:${seconds}.${centiseconds}`
}

function Timer() {
  const { elapsed, running, start, stop, reset } = useTimerStore()

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-2">타이머</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">간단한 스톱워치</p>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-10 inline-block">
        <p className="text-6xl font-bold mb-8 tabular-nums font-mono">
          {formatTime(elapsed)}
        </p>
        <div className="flex gap-3 justify-center">
          {running ? (
            <button
              onClick={stop}
              className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors cursor-pointer"
            >
              정지
            </button>
          ) : (
            <button
              onClick={start}
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors cursor-pointer"
            >
              {elapsed > 0 ? '계속' : '시작'}
            </button>
          )}
          <button
            onClick={reset}
            className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm transition-colors cursor-pointer"
          >
            초기화
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer
