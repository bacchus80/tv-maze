import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: string) {
   // getting stored value
   const saved = localStorage.getItem(key);
   const initial = saved !== null ? JSON.parse(saved) : defaultValue;
   return initial || defaultValue;
}

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
   const [value, setValue] = useState(() => {
      return getStorageValue(key, JSON.stringify(defaultValue));
   });

   useEffect(() => {
      // storing input name
      localStorage.setItem(key, JSON.stringify(value));
   }, [key, value]);

   return [value, setValue];
};
