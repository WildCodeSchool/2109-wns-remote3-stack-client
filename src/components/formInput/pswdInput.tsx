/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  password: string;
  required: boolean;
  error: string;
  id: string;
}

function PswdInput({
  placeholder,
  label,
  register,
  password,
  required,
  id,
  error,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full mt-5 flex-col text-sm">
      {label}
      <input
        id={id}
        type="email"
        placeholder={placeholder}
        {...register(password, { required })}
        className="bg-darkGray mt-2 border rounded-md focus:outline-none p-2 border-purple"
      />
      <p className="text-red text-xs">{error}</p>
      {required && <p className="text-xs text-purple mt-1">Fieds required</p>}
    </label>
  );
}

export default PswdInput;
