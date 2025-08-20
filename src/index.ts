import { randomInt } from "crypto";

export const ALPHABET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let counter = 0;

function randomString(length: number): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += ALPHABET[randomInt(ALPHABET.length)];
  }
  return out;
}

/**
 * Generate an ID.
 * @param size - Minimum size of the ID. Default = 7
 * @param unique - If true, ensures uniqueness with timestamp + counter.
 */
export function generateId(size: number = 7, unique: boolean = false): string {
  if (size < 7) size = 7; // enforce minimum

  let base = randomString(size);

  if (!unique) return base;

  counter += 1;
  const ts = Date.now().toString(36);
  const c = counter.toString(36);

  // Ensure final length >= requested size
  const suffix = `${ts}${c}`;
  if (base.length + suffix.length < size) {
    base += randomString(size - (base.length + suffix.length));
  }

  return base + suffix;
}

/** Convenience wrapper for unique IDs */
export function generateUniqueId(size: number = 7): string {
  return generateId(size, true);
}
