import { useEffect, useRef } from 'react';
import equals from 'shallowequal';

export function useReduceChange<V, A>(
  reduce: (acc: A, curr: V, prev: V) => A,
  acc: A,
  value: V,
  deps?: any[]
) {
  const prevValueRef = useRef(value);
  const prevAccRef = useRef(acc);
  const prevDepsRef = useRef(deps);

  const currAcc = !equals(prevDepsRef.current, deps)
    ? acc
    : prevValueRef.current !== value
    ? reduce(prevAccRef.current, value, prevValueRef.current)
    : prevAccRef.current;

  useEffect(() => {
    prevValueRef.current = value;
    prevAccRef.current = currAcc;
    prevDepsRef.current = deps;
  });

  return currAcc;
}
