import { useEffect, useState } from "react";

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function() {
    const storedValues = localStorage.getItem(key)
    return storedValues ? JSON.parse(storedValues) : initialValue
  });

  useEffect(function() {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
