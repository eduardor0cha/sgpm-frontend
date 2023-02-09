import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

type Themes = "light" | "dark";

type Props = {
  toggleTheme(theme?: Themes): void;
  theme: Themes | undefined;
};

export const ThemeContext = createContext({} as Props);

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Themes>();

  const toggleTheme = useCallback(
    (t?: Themes) => {
      let userPreferences;
      try {
        userPreferences = JSON.parse(
          localStorage.getItem("userPreferences") ?? "{}"
        );
      } catch (error) {
        userPreferences = {};
      }

      if (t && (t === "light" || t === "dark")) {
        userPreferences["theme"] = t;
        localStorage.setItem(
          "userPreferences",
          JSON.stringify(userPreferences)
        );
        setTheme(userPreferences.theme as Themes);
        return;
      }

      userPreferences["theme"] = theme === "light" ? "dark" : "light";
      localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
      setTheme(userPreferences.theme as Themes);
    },
    [setTheme, theme]
  );

  useEffect(() => {
    if (!theme) {
      let userPreferences;
      try {
        userPreferences = JSON.parse(
          localStorage.getItem("userPreferences") ?? "{}"
        );
      } catch (error) {
        userPreferences = {};
      }

      if (!userPreferences.theme) toggleTheme("light");
      else toggleTheme(userPreferences.theme);
    }

    document.documentElement.classList.remove(
      `theme--${theme === "light" ? "dark" : "light"}`
    );
    document.documentElement.classList.add(`theme--${theme}`);
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
