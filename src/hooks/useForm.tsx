import { useState, useCallback } from "react";

export default function useForm(inputValues: string[]) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, validationMessage } = event.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setValid(event.target.closest("form")!.checkValidity());
  };

  const resetForm = useCallback((newValues: string[]) => {
    setValues({...inputValues, ...newValues});
    setErrors({});
    setValid(false);
  }, [inputValues]);

  return { values, errors, isValid, onChange, resetForm };
} 