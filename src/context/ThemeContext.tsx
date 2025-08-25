import React from "react";
import { ThemeContext, useThemeLogic } from "../hooks/useTheme"; // <-- Importamos desde el nuevo hook

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const themeLogic = useThemeLogic();

  return (
    <ThemeContext.Provider value={themeLogic}>{children}</ThemeContext.Provider>
  );
};
