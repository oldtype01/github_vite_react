import { NavLink, Outlet } from 'react-router-dom'
import useThemeStore from '../store/useThemeStore'

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MainLayout() {
  const { isDark, toggleDark } = useThemeStore()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex gap-6 items-center">
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
            onClick={toggleDark}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            className="ml-auto p-2 rounded-lg text-gray-500 hover:text-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
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
