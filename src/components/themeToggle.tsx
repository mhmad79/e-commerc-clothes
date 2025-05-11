"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <button
      className="btn btn-sm"
      onClick={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))}>
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
