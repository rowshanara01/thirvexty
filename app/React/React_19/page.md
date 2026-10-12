# React 19 নতুন কিছু ফিচার

React 19 (2024) নিয়ে এসেছে কিছু গুরুত্বপূর্ণ ফিচার, যা Developer Experience এবং Performance আরও উন্নত করেছে।

![React 19](../../../public/React/React%2019.png)

### **১. Actions**

React 19 এ নতুন `actions` কনসেপ্ট এসেছে যা form handling কে আরও সহজ করে তোলে।

```jsx
"use client";
import { useFormStatus } from "react-dom";

function MyForm() {
  async function handleSubmit(formData) {
    "use server";
    // server-side logic
  }

  return (
    <form action={handleSubmit}>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}
```

### **২. New Compiler**

React 19 নতুন React Compiler এনেছে যা JSX কে আরও optimal রূপে compile করে, যাতে performance অনেক বেড়ে যায় এবং developer কে কম boilerplate কোড লিখতে হয়।

### **৩. use()**

`use()` নামের নতুন হুক async function বা promise হ্যান্ডেল করতে ব্যবহার করা যায় — যা সাধারণত server component এর মধ্যে ব্যবহার হয়।

```jsx
const data = await fetchData();
const result = use(data); // React 19
```

### **৪. Document Metadata Handling (useMetadata)**

নতুন `useMetadata()` দ্বারা সহজে page এর title, meta tag ইত্যাদি manage করা যায়, বিশেষ করে Server Component বা App Router এর মধ্যে।
