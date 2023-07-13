import { useCallback, useEffect, useRef, useState } from "react";

type Themes = "dark" | "white";

export const useTheme = () => {
  const [theme, setTheme] = useState<Themes | null>(
    ((window && window.localStorage && localStorage?.getItem("theme")) ||
      null) as Themes | null
  );
  useEffect(() => {
    if (!(document && document.querySelector)) {
      return;
    }
    const html = document.querySelector("html");

    const current: Themes = theme || "white";
    const opposite: Themes = current === "dark" ? "white" : "dark";

    if (!theme) {
      localStorage.setItem("theme", current);
      setTheme(current);
    }

    html?.classList.contains(current) || html?.classList.toggle(current); // if html has current mode, do nothing, else toggle
    html?.classList.contains(opposite) && html.classList.toggle(opposite); // if html has opposite mode, toggle, else do nothing
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const current: Themes = theme || "white";
    const opposite: Themes = current === "dark" ? "white" : "dark";
    localStorage.setItem("theme", opposite);
    setTheme(opposite);
  }, [theme]);

  return { toggleTheme, theme };
};
