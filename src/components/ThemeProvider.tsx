"use client";
import { createContext, useState, useContext, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

type ThemeContextValue = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: (_value) => {
    void _value;
  },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  // Ambil theme dari localStorage hanya sekali saat mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) setTheme(saved);
    }
  }, []);
  // Update attribute dan localStorage saat theme berubah
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full shadow-md bg-[#2d2d2d] text-[#FFFBF1] border border-[#2d2d2d]/20 hover:bg-[#E8895A] transition-all duration-300 text-sm font-bold"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
