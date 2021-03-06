# @yao-react/use-reduce-change

React hook to reduce value changes.

## Install

```
npm install @yao-react/use-reduce-change
```

```
yarn add @yao-react/use-reduce-change
```

## Getting started

```tsx
const Demo = () => {
  const [index, setIndex] = useState(0);
  const count = useReduceChange(
    (acc, curr, prev) => acc + curr + prev, // reduce
    0, // initAcc
    index // value
  );
  return (
    <div>
      <button onClick={() => setIndex(x => x + 1)}>inc index</button>
      <p>Index: {index}</p>
      <p>Count: {count}</p>
    </div>
  );
};
```

## API

| name    | type                     | required | description |
| ------- | ------------------------ | -------- | ----------- |
| reduce  | (acc, curr, prev) => acc | true     |             |
| initAcc | any                      | true     |             |
| value   | any                      | true     |             |
| deps    | any[]                    | false    |             |

## More words

- In the first run of render it will just return the `acc`, since there is no change of value, that is to say, the `reduce`
  function will only run in the next run of render.
- If the `deps` changed in a run of render, it will behave just as the current run is the first run of render.
