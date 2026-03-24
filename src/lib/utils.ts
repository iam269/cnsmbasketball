/**
 * CNSM Baschet - Website Oficial
 * Utilități comune
 * 
 * @module utils
 * @description Funcții helper pentru manipularea claselor CSS
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combină clasele CSS folosind tailwind-merge pentru a evita conflictele
 * @param inputs - Array de valori ClassValue
 * @returns String cu clasele combinate
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
