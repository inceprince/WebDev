# ⚙️ Parcel Installation & React Setup Guide

---

## 🧱 Step 1: Initialize Your Project

```bash
npm init
```

This command initializes a new Node.js project and creates a `package.json` file.

---

## 📦 What is `package.json`?

The `package.json` file is a **metadata/configuration file** for your project. It tells:

- 📛 **Project Name, Version, Description**
- 🎯 **Main entry point** (`main`)
- 📦 **Installed dependencies** (`dependencies`, `devDependencies`)
- 🧪 **Custom scripts** (e.g. `start`, `test`)
- 🪪 **License**, 🔍 **Keywords**, ✍️ **Author info**

---

## 🧰 What is `npm`?

> **npm (Node Package Manager)** is a tool to manage packages and libraries in a Node.js project.  
> Think of it like a huge **database of reusable code** for developers.

---

## 🚀 Step 2: Install Parcel Bundler

```bash
npm install parcel
```

🔧 Parcel is a zero-config web application bundler. It helps you run and bundle your frontend projects easily.

---

## ⚛️ Installing React Without CDN

To use React locally in your project:

```bash
npm install react
npm install react-dom
```

This allows you to use `React` and `ReactDOM` in your files via:

```js
import React from "react";
import ReactDOM from "react-dom";
```

---

## 📁 What About `node_modules`?

❌ Do **not upload** the `node_modules` folder to GitHub or any online platform.  
✅ Upload only:

- Your **source code**
- `package.json`
- `package-lock.json`

These files help **reinstall all dependencies** on any system.

---

## ♻️ Reinstall `node_modules` Later?

To re-download and install all listed dependencies:

```bash
npm install
```

This recreates the `node_modules` folder using `package.json`.

---
