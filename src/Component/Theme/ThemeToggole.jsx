import React, { useEffect, useState } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!theme) return null;

  return (
    <button onClick={handleToggle} className="btn btn-ghost btn-circle text-xl">
      {theme === "dark" ? (
        <BsSun className="text-warning" />
      ) : (
        <BsMoonFill className="text-base-content" />
      )}
    </button>
  );
};

export default ThemeToggle;
