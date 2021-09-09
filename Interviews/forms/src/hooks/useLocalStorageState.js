import { useState, useEffect } from "react";

export default function UseLocalStorageState(key, defaultVal){
  // instead of passing a val, we pass a function
  // check in localStorage, is there anything saved
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    }
    catch(e){
      val = defaultVal;
    }
    return val;
  });
  // update localStorage
  useEffect(()=> {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
