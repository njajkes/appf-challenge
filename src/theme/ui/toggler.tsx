import { useTheme } from "../lib";

export const Toggler = () => {
  const { toggleTheme, theme } = useTheme();

  return <button onClick={toggleTheme}>{theme}</button>;
};
