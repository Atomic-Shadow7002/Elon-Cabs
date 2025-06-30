// src/ThemeToggle.jsx
function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      Toggle Theme
    </button>
  )
}

export default ThemeToggle
