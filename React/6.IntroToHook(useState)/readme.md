## 🔹 What is a Hook in React?

A **Hook** is a function provided by React that lets you **use React features** (like state, lifecycle, etc.) inside **functional components**.


React does not have the state (data/value) so that we use hook to give state to react
---

## 🔹 What Does a Hook Do?

Hooks allow functional components to:

- ✅ **Store and update state**
- ✅ **Run code when a component mounts, updates, or unmounts**
- ✅ **Share logic between components** without repeating code

---

## 🔹 Destructuring That Array

**Array destructuring** is a JavaScript feature that lets you unpack values from arrays into separate variables.
### 🔽 Example:
```js
const arr = [10, 20];
const [a, b] = arr;
console.log(a); // 10
console.log(b); // 20
```
---
## 🔹 Apply to `useState`
Now apply the same idea to `useState`:
```js
const [count, setCount] = useState(0);
```
This is exactly like:
```js
const arr = useState(0); // arr = [0, setCount function]
const count = arr[0]; // current value
const setCount = arr[1]; // function to update it
```
---
## ✅ Conclusion
So yes, your line:
```js
let [count, setCount] = useState(0);
```
**is array destructuring**, because you're:
- Getting the **first element** (`count`)
- Getting the **second element** (`setCount`)
from the array returned by `useState()`.
