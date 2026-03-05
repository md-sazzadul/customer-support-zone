### What is JSX, and why is it used?

- JSX বা JavaScript XML হলো JavaScript এর একটি syntax extension যেটার মাধ্যমে আমরা JavaScript এর ভিতরেই HTML-like কোড লিখতে পারি। JSX এর মাধ্যমে কোড কে খুব সহজেই read করা যায়। এছাড়াও early ডেভেলপমেন্ট টাইম এ error গুলো কে catch করা এবং reusable কম্পোনেন্ট তৈরী করতে JSX হেল্প করে। এজন্যই JSX ব্যবহার করা হয়।

### What is the difference between State and Props?

- Data এক কম্পোনেন্ট থেকে আরেক কম্পোনেন্টে pass করার জন্য Props ব্যবহার করা হয়, যেখানে State এর মাধ্যমে কম্পোনেন্ট এর ভিতরের Data কে ম্যানেজ করা হয়। State এর মান পরিবর্তন করা যায় যেখানে Props এর মান সরাসরি পরিবর্তন করা যায় না। Props কে তার প্যারেন্ট কম্পোনেন্ট কন্ট্রোল করে যেখানে State কে তার নিজস্ব কম্পোনেন্ট কন্ট্রোল করে।

### What is the useState hook, and how does it work?

- useState হলো এমন একটি Hook, যা functional component-এ state (পরিবর্তনশীল ডাটা) ব্যবস্থাপনার জন্য ব্যবহার করা হয়। যখন state পরিবর্তন হয়, তখন React স্বয়ংক্রিয়ভাবে component-টিকে আবার render করে।
  useState এর Syntax:
  ```javascript
  const [state, setState] = useState(initialValue);
  ```
  এখানে:
  state → বর্তমান মান (current value)
  setState → state আপডেট করার ফাংশন
  initialValue → state এর প্রাথমিক মান

### How can you share state between components in React?

- React-এ একটি component-এর state অন্য component-এর সাথে শেয়ার করার জন্য সাধারণত “Lifting State Up” পদ্ধতি ব্যবহার করা হয়। অর্থাৎ state-কে common parent component-এ রাখা হয় এবং সেখান থেকে props-এর মাধ্যমে child component-গুলিতে পাঠানো হয়।

### How is event handling done in React?

- React-এ event handling করা হয় JSX element-এ event attribute (যেমন onClick, onChange, onSubmit) ব্যবহার করে এবং সেই event-এর সাথে একটি JavaScript function যুক্ত করে।

```javascript
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

এখানে handleClick() একটি function, onClick event ব্যবহার করা হয়েছে, Button ক্লিক করলে function execute হয়
