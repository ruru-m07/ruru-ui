import { ClassNameValue, twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS class names.
 * Uses `twMerge` from `tailwind-merge` to handle class name conflicts and ensure
 * the final output is a valid set of Tailwind CSS classes.
 *
 * @param {...string[]} classLists - The class names to merge.
 * @returns {string} - The merged class names.
 */
export const cn: (...classLists: ClassNameValue[]) => string = twMerge;
