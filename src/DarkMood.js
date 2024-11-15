import { useState, useEffect } from "react";

export const useDarkMood = () => {
  const [isDarkMood, setIsDarkMood] = useState(false);

  useEffect(() => {
    const savedMood = localStorage.getItem("darkMood");
    if (savedMood === "true") {
      setIsDarkMood(true);
    }
  }, []);

  const toggleDarkMood = () => {
    setIsDarkMood(!isDarkMood);
  };

  useEffect(() => {
    localStorage.setItem("darkMood", isDarkMood.toString());
    if (isDarkMood) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMood]);

  return { isDarkMood, toggleDarkMood };
};
