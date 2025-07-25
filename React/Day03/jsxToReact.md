# ⚛️ JSX to React.createElement: Explained

## ✨ What is JSX?

JSX stands for **JavaScript XML**. It allows you to write HTML-like code inside JavaScript:

```jsx
const element = <h1>Hello, Prince!</h1>;
```

JSX is not valid JavaScript by itself — it must be converted before the browser can understand it.

---

## 🔁 How JSX Works Behind the Scenes

When you write:

```jsx
const element = <h1>Hello, Prince!</h1>;
```

It gets **compiled** into:

```js
const element = React.createElement("h1", null, "Hello, Prince!");
```

This is what React actually uses to create **Virtual DOM** elements.

---

## 🛠️ Who Does the Conversion?

**Babel** — a JavaScript compiler.

- Babel converts JSX into `React.createElement` calls.
- It also compiles modern JavaScript (ES6+) to browser-compatible JavaScript.
- Tools like **Parcel**, **Vite**, and **Webpack** use Babel internally when they see `.js` or `.jsx` files.

---

