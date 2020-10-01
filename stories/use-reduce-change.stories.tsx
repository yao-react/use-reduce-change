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
      <button onClick={() => setDep(x => x + 1)}>change dep</button>
      <p>
        result: {count} {currIndex} {prevIndex}
      </p>
    </div>
  );
};
