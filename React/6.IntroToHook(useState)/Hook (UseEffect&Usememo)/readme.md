# 🧠 React Optimization Concepts Summary

## ✅ 1. `useEffect()` — Side Effects Handler

- **Kab chalta hai?**  
  Hamesha **render ke baad** chalta hai (last mein).

- **Kis liye use hota hai?**  
  - API calls
  - Timers
  - Event listeners
  - DOM manipulation

- **Syntax example:**
  ```js
  useEffect(() => {
    console.log("Component mounted or updated");
  }, [dependency]); // dependency ke change hone pe chalega
   
---
   ✅2. React.memo() — Prevent Unnecessary Re-Renders
Purpose:
Agar parent re-render ho raha hai lekin child ke props change nahi ho rahe, toh child component re-render se bache.

- **Syntax example:**
  ```js
 export default React.memo(ColorFul);
