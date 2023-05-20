import { useState } from "react";

export default function useStateStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storageValue = window.sessionStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : defaultValue;
  });

  const setValue = val => {
    setState(val);
    window.sessionStorage.setItem(key, JSON.stringify(val));
  }

  return [state, setValue]
}
