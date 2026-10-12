# 6. useRef

**useRef** হুক সাধারণত DOM element-এর reference ধরে রাখতে বা mutable value সংরক্ষণের জন্য ব্যবহৃত হয় যা রি-রেন্ডার ট্রিগার করে না।

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

➡️ এখানে `inputRef.current` এর মাধ্যমে input element-এ সরাসরি access করা হয়েছে।
