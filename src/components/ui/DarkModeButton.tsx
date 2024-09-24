import { useEffect, useState } from "react";
import Icon from "./Icon.astro";
import { cn } from "../utils/utils";

interface Props {

}

export const DarkModeButton = ({ }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar el modo oscuro en el inicio
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="text-low dark:text-low-dark hover:text-text hover:dark:text-white border rounded-xl p-2"
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
      )}
    </button>
  );
}
