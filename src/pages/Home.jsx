import useCounterStore from '../store/useCounterStore'

function Home() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-2">홈</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">Zustand로 관리되는 전역 카운터</p>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-10 inline-block">
        <p className="text-6xl font-bold mb-8 tabular-nums">{count}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={decrement}
            className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 font-semibold text-lg transition-colors cursor-pointer"
          >
            −
          </button>
          <button
            onClick={reset}
            className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm transition-colors cursor-pointer"
          >
            초기화
          </button>
          <button
            onClick={increment}
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg transition-colors cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
