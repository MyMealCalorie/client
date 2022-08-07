import { useState, useCallback } from 'react';

export const useInput =  (initialvalue = '') => {
  const [value, setValue] = useState(initialvalue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  
  return [value, handler, setValue];
};
