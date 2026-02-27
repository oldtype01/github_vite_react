import useCounterStore from '../store/useCounterStore'

function About() {
  const count = useCounterStore((state) => state.count)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">소개</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Vite + React + Zustand + React Router로 구성된 앱입니다.
      </p>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 space-y-3">
        <p className="text-gray-700 dark:text-gray-300">
          홈에서 변경한 카운터 값:{' '}
          <span className="font-bold text-indigo-600 dark:text-indigo-400">{count}</span>
        </p>
        <p className="text-sm text-gray-400">
          Zustand 스토어는 페이지가 전환되어도 상태를 유지합니다.
        </p>
      </div>
    </div>
  )
}

export default About
