/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  required: boolean;
}

function DateInput({
  id,
  register,
  name,
  label,
  required,
}: IProps): JSX.Element {
  return (
    <label htmlFor={id} className="flex w-full mt-5 flex-col text-sm">
      {label}
      <input
        className="bg-darkGray mt-1 border rounded-sm focus:outline-none p-2 border-purple"
        type="Date"
        id={name}
        {...register(name, { required })}
      />
      {required && <p className="text-xs text-purple mt-1">Fieds required</p>}
    </label>
  );
}

export default DateInput;
