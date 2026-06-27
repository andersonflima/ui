import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combina classes condicionais e resolve conflitos do Tailwind com segurança. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
