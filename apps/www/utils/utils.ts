import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fromNumberToCurrency = (val: number) =>
  new Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(
    val,
  );
