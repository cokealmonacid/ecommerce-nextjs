/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default function useFromStore<T, F>(
 store: (callback: (state: T) => unknown) => unknown,
 storeCallback: (state: T) => F
) {
    const [state, setState] = useState<F>();

    const stateOfStore = store(storeCallback) as F;

    useEffect(() => {
     setState(stateOfStore);
    }, [stateOfStore]);

   return state;
}
