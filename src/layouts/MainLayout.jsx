import { NavLink, Outlet } from 'react-router-dom'
import useDarkModeStore from '../store/useDarkModeStore'

function MainLayout() {
  const { dark, toggle } = useDarkModeStore()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                : 'text-gray-500 hover:text-indigo-500 transition-colors'
            }
          >
            홈
          </NavLink>
          <NavLink
            to="/timer"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                : 'text-gray-500 hover:text-indigo-500 transition-colors'
            }
          >
            타이머
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-indigo-600 dark:text-indigo-400'
                : 'text-gray-500 hover:text-indigo-500 transition-colors'
            }
          >
            소개
          </NavLink>
          <button
            onClick={toggle}
            className="ml-auto p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            aria-label={dark ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {dark ? '\u2600\uFE0F' : '\uD83C\uDF19'}
          </button>
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
