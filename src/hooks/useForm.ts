import { useState, FormEvent } from "react";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const updateForm = (event: FormEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const {name, value} = inputElement;

    setForm({...form, [name]: value});
  };

  return {
    form,
    setForm,
    updateForm
  };
};

export default useForm;
