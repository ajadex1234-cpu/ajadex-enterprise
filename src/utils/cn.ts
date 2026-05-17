type ClassValue = string | false | null | undefined;

/** Merge conditional class names without external dependencies */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
