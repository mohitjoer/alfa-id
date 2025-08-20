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

interface GenerateIdOptions {
  size?: number;
  unique?: boolean;
}

/**
 * Generate an ID.
 * @param options - Configuration options or size number for backwards compatibility
 */
export function generateId(options: GenerateIdOptions | number = {}): string {
  // Handle backwards compatibility with positional parameter
  let size: number;
  let unique: boolean;
  
  if (typeof options === 'number') {
    size = options;
    unique = false;
  } else {
    size = options.size ?? 7;
    unique = options.unique ?? false;
  }

  // Enforce minimum size only for non-unique IDs
  // For unique IDs, we need flexibility to accommodate timestamp+counter
  if (!unique && size < 1) {
    size = 7;
  } else if (unique && size < 1) {
    size = 7;
  }

  if (!unique) {
    return randomString(size);
  }

  // For unique IDs, we need to ensure we can fit timestamp + counter
  counter += 1;
  const ts = Date.now().toString(36);
  const c = counter.toString(36);
  const suffix = `${ts}${c}`;
  
  // Calculate how much random content we need
  const randomLength = Math.max(0, size - suffix.length);
  const base = randomString(randomLength);
  
  const result = base + suffix;
  
  // If result is shorter than requested size, pad with more random chars
  if (result.length < size) {
    return result + randomString(size - result.length);
  }
  
  return result;
}

/**
 * Generate an ID with backwards compatibility for positional parameters
 * @param size - Size of the ID. Default = 7
 * @param unique - If true, ensures uniqueness with timestamp + counter.
 */
export function generateIdLegacy(size: number = 7, unique: boolean = false): string {
  return generateId({ size, unique });
}

/** Convenience wrapper for unique IDs */
export function generateUniqueId(size: number = 7): string {
  return generateId({ size, unique: true });
}