# 🆔 alfa-id

Generate short, random, and optionally unique IDs for JavaScript & TypeScript projects.

[![npm version](https://badge.fury.io/js/alfa-id.svg)](https://www.npmjs.com/package/alfa-id)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎯 **Simple API** - Clean and intuitive interface
- ⚡ **Lightweight** - Zero dependencies, minimal footprint
- 🔒 **Cryptographically secure** - Uses Node.js crypto module
- 🔄 **Unique IDs** - Optional uniqueness with timestamp + counter
- 📦 **Dual package** - Works with both CommonJS and ESM
- 🏷️ **TypeScript support** - Full type definitions included
- ⚙️ **Customizable** - Configurable length and options

## 📦 Installation

```bash
npm install alfa-id
```

```bash
yarn add alfa-id
```

```bash
pnpm add alfa-id
```

## 🚀 Quick Start

### Basic Usage

```javascript
import { generateId } from 'alfa-id';
// or: const { generateId } = require('alfa-id');

// Generate a default 7-character ID
console.log(generateId()); 
// → "Kx7nA9p"

// Generate a custom length ID
console.log(generateId({ size: 10 })); 
// → "mK9pL2nX4q"

// Generate a unique ID (guaranteed uniqueness)
console.log(generateId({ unique: true })); 
// → "Kx7nA9pm1k2n4c1"
```

### All Available Functions

```javascript
import { generateId, generateUniqueId } from 'alfa-id';

// Method 1: Using options object (recommended)
generateId()                          // Default 7-char ID
generateId({ size: 12 })              // Custom length
generateId({ unique: true })          // Unique 7-char ID  
generateId({ size: 15, unique: true }) // Unique custom length

// Method 2: Convenience function for unique IDs
generateUniqueId()      // Unique 7-char ID
generateUniqueId(20)    // Unique 20-char ID
```

## 📚 API Reference

### `generateId(options?)`

Generate a random ID with optional configuration.

#### Parameters

- `options` (Object, optional):
  - `size` (number): Length of the ID. Default: `7`
  - `unique` (boolean): Generate unique ID with timestamp + counter. Default: `false`

#### Returns

- `string`: The generated ID

#### Examples

```javascript
generateId()                           // "Kx7nA9p"
generateId({ size: 5 })               // "mK9pL" 
generateId({ size: 10, unique: true }) // "Kx7nA9pm1k2n4c1"
```

### `generateUniqueId(size?)`

Convenience function to generate unique IDs.

#### Parameters

- `size` (number, optional): Length of the ID. Default: `7`

#### Returns

- `string`: The generated unique ID

#### Examples

```javascript
generateUniqueId()    // "Kx7nA9pm1k2n4c"
generateUniqueId(15)  // "Kx7nA9pm1k2n4c1x2y"
```

## 🎲 Character Set

IDs are generated using a mix of uppercase letters, lowercase letters, and numbers:

```
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
```

This gives **62 possible characters** per position, providing excellent entropy for random IDs.

## 🔒 Uniqueness Guarantee

When `unique: true` is specified:

- **Timestamp**: Current time in base-36 format
- **Counter**: Incremental counter in base-36 format  
- **Collision-resistant**: Handles high-frequency generation

The uniqueness mechanism ensures no duplicates even when generating thousands of IDs per second.

## 🛠️ Use Cases

Perfect for generating:

- **Session tokens** - Temporary user sessions
- **Request IDs** - API request tracking
- **Temporary keys** - Cache keys, temporary identifiers
- **Test data** - Mock IDs for testing
- **Short URLs** - URL shortener services
- **Database keys** - Non-sensitive primary keys
- **File names** - Temporary or cache files

## 🔧 TypeScript Support

Full TypeScript support with proper type definitions:

```typescript
import { generateId, generateUniqueId } from 'alfa-id';

interface User {
  id: string;
  name: string;
}

const user: User = {
  id: generateId({ size: 8 }),
  name: 'John Doe'
};

// Type-safe options
const options: { size: number; unique: boolean } = {
  size: 12,
  unique: true
};

const uniqueId: string = generateId(options);
```

## 📊 Performance

Benchmarks on Node.js v18 (M1 MacBook Pro):

- **Regular IDs**: ~500,000 ops/sec
- **Unique IDs**: ~400,000 ops/sec
- **Memory usage**: <1MB for 100k IDs

## 🔐 Security Notes

- Uses Node.js `crypto.randomInt()` for cryptographically secure randomness
- **Not suitable for**: Cryptographic keys, passwords, or security-critical tokens
- **Suitable for**: Application IDs, temporary identifiers, non-sensitive use cases

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request on [https://github.com/mohitjoer/alfa-id](https://github.com/mohitjoer/alfa-id).

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or issues, please [open an issue](https://github.com/yourusername/alfa-id/issues) on GitHub.

---

Made with ❤️ by [Mohit Joe R](https://github.com/yourusername)