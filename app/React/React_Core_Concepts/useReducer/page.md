# 5. useReducer

**useReducer** হলো একটি hook যা complex state management বা multiple state value ব্যবস্থাপনার জন্য ব্যবহার করা হয়। এটি Redux-এর মতো reducer pattern ব্যবহার করে।

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

➡️ এখানে `useReducer` একটি state এবং একটি dispatch function প্রদান করে, যা reducer function ব্যবহার করে state আপডেট করে।

---

# 🧠 useState vs useReducer (React)

React-এর মধ্যে state ম্যানেজমেন্টের জন্য দুইটি জনপ্রিয় হুক হলো `useState` এবং `useReducer`। নিচে বাংলায় এই দুইটি হুকের তুলনামূলক আলোচনা করা হলো।

---

## 🔄 useState vs useReducer

| দিক                        | `useState`                                                     | `useReducer`                                                                      |
| -------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 📌 ব্যবহারের ধরন           | সাধারণ এবং সহজ state ব্যবস্থাপনার জন্য ব্যবহার করা হয়         | জটিল এবং বহু state বা লজিক থাকলে ব্যবহৃত হয়                                      |
| 🎯 উপযুক্ততা               | যখন 1-2 টি simple state যেমন input field, counter ইত্যাদি থাকে | যখন অনেক state একসাথে পরিচালনা করতে হয় বা state-এর উপর ভিত্তি করে জটিল লজিক থাকে |
| 🧠 State structure         | সাধারণত primitive (string, number, boolean), array বা object   | সাধারণত object আকারে ব্যবহৃত হয়, যেটা একটি reducer function দ্বারা update হয়    |
| ⚙️ Update logic            | `setState(newValue)` বা `setState(prev => ...)`                | `dispatch({ type: "ACTION", payload })` এবং একটি reducer function                 |
| ✅ Syntax সহজ              | হ্যাঁ, অনেক সহজ ও সরল                                          | তুলনামূলকভাবে জটিল, কিন্তু scalable                                               |
| 🔄 Multiple state handling | একাধিক `useState` লাগতে পারে                                   | সব state একসাথে reducer এ handle করা যায়                                         |
| 💬 উদাহরণ                  | Counter, Toggle, Form Input                                    | Todo App, Complex Form, Modal logic                                               |

---

## 🧪 উদাহরণ

### ✅ useState

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### ✅ useReducer

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </div>
  );
}
```

---

## 🧠 কবে কোনটা ব্যবহার করব?

| পরিস্থিতি                                                       | কোনটা ব্যবহার করব |
| --------------------------------------------------------------- | ----------------- |
| Simple counter, toggle switch                                   | ✅ `useState`     |
| Input field বা Form-এর একটি field                               | ✅ `useState`     |
| Multiple related state বা nested object                         | ✅ `useReducer`   |
| State update লজিক জটিল (if-else, switch, validation)            | ✅ `useReducer`   |
| পূর্ববর্তী state এর উপর ভিত্তি করে নতুন state নির্ধারণ করতে হয় | ✅ `useReducer`   |

---

👉 শেষ কথা: `useState` এবং `useReducer` দুটোই শক্তিশালী টুল। ছোট খাটো সহজ state এর জন্য `useState`, আর বড় ও জটিল পরিস্থিতির জন্য `useReducer` ব্যবহার করলেই হবে!
