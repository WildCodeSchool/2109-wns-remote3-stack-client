/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  email: string;
  required: boolean;
  error: string;
  id: string;
}

function EmailInput({
  placeholder,
  label,
  register,
  email,
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
        {...register(email, { required })}
        className="bg-white text-lightPurple mt-2  rounded-md focus:outline-none p-2"
      />
      <p className="text-red text-xs">{error}</p>
      {required && <p className="text-xs text-purple mt-1">Fieds required</p>}
    </label>
  );
}

export default EmailInput;
