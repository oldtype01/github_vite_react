import { NavLink, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-3xl mx-auto px-6 py-4 flex gap-6">
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
        </nav>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
