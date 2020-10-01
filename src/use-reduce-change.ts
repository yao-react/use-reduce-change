import { useEffect, useRef } from 'react';
import equals from 'shallowequal';

export function useReduceChange<V, A>(
  reduce: (acc: A, next: V, prev: V) => A,
  acc: A | (() => A),
  value: V,
  deps?: any[]
) {
  const prevValueRef = useRef(value);
  const prevAccRef = useRef(getAcc(acc));
  const prevDepsRef = useRef(deps);

  const nextAcc = !equals(prevDepsRef.current, deps)
    ? getAcc(acc)
    : prevValueRef.current !== value
    ? reduce(prevAccRef.current, value, prevValueRef.current)
    : prevAccRef.current;

  useEffect(() => {
    prevValueRef.current = value;
    prevAccRef.current = nextAcc;
    prevDepsRef.current = deps;
  });

  return nextAcc;
}

function getAcc(acc: any | (() => any)) {
  return typeof acc === 'function' ? acc() : acc;
}
