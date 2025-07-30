## 📦 Exporting and Importing Multiple Functions in JavaScript

This section demonstrates how to export multiple functions from a single file and import them in another.

---

### ✅ Exporting Multiple Functions from One File (e.g., `utils.js`)

```js
// utils.js

export function greet() {
  return "Hi";
}

export function meet() {
  return "Hello";
}


✅ Importing Multiple Functions in Another File (e.g., App.js)

// App.js

import { greet, meet } from './utils';

    📌 Make sure the file path (./utils) is correct relative to the file where you're importing.