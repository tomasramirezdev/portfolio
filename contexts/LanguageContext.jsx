"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ lang: "es", toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  function toggle() {
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("lang", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
