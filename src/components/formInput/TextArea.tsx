/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  required: boolean;
  error: string;
  id: string;
}

function TextArea({
  label,
  placeholder,
  register,
  name,
  required,
  id,
  error,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full mt-5 flex-col text-sm">
      {label}
      <textarea
        id={id}
        placeholder={placeholder}
        {...register(name, { required })}
        className="bg-darkGray mt-2 border lg:h-24 rounded-md focus:outline-none p-2 border-purple"
      />
      <p className="text-red text-xs">{error}</p>
      {required && <p className="text-xs text-purple mt-1">Fieds required</p>}
    </label>
  );
}

export default TextArea;
