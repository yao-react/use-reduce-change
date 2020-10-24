import * as React from 'react';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { useReduceChange } from '../src';

const meta: Meta = {
  title: 'use-reduce-change',
};

export default meta;

export const UseReduceChange = () => {
  const [index, setIndex] = useState(1);
  const [dep, setDep] = useState(0);
  const [count, currIndex, prevIndex] = useReduceChange(
    (acc, a, b) => [acc[0] + a, a, b],
    [-1, -1, -1],
    index,
    [dep]
  );
  return (
    <div>
      <button onClick={() => setIndex(x => x + 1)}>inc index</button>
      <span> </span>
      <button onClick={() => setDep(x => x + 1)}>change dep</button>
      <p>
        result: {count} {currIndex} {prevIndex}
      </p>
    </div>
  );
};

export const AddPairs = () => {
  const [index, setIndex] = useState(0);
  const count = useReduceChange(
    (acc, curr, prev) => acc + curr + prev,
    0,
    index
  );
  return (
    <div>
      <button onClick={() => setIndex(x => x + 1)}>inc index</button>
      <p>Index: {index}</p>
      <p>Count: {count}</p>
    </div>
  );
};
