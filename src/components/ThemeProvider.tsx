/**
 * CNSM Baschet - Website Oficial
 * Theme Provider pentru dark/light mode
 * 
 * @module ThemeProvider
 * @description Wrapper pentru next-themes care oferă suport pentru tema aplicatiei
 */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * Componenta ThemeProvider - oferă context pentru tema aplicatiei
 * Suportă dark mode, light mode și tema sistemului
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
