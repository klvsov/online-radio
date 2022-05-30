import { useEffect, useState } from 'react';
import { IStation } from 'types/stations';

type ReturnType = [
  IStation[],
  React.Dispatch<React.SetStateAction<IStation[]>>
];

const useLocalStorage = (key: string, initialValue?: []): ReturnType => {
  const [state, setState] = useState<IStation[]>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.log(error);
      }
    }
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
