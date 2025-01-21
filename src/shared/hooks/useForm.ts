import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface UseFormProps<T> {
  initialValue: T;
}

export const useForm = <T>({ initialValue }: UseFormProps<T>) => {
  const [field, setField] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setField((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    field,
    setField,
    onChange
  };
};
