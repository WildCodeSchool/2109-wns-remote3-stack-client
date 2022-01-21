/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { GetAllProjects_getAllProjects } from '../../API/types/GetAllProjects';

interface IProps {
  label: string;
  data: GetAllProjects_getAllProjects[];
  name: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
}

function SelectInputProjectId({
  label,
  data,
  name,
  id,
  register,
  required,
}: IProps): JSX.Element {
  return (
    <label className="flex w-full mt-5 flex-col text-sm" htmlFor={label}>
      {label}
      <select
        className="bg-darkGray mt-2 border rounded-sm focus:outline-none p-2 border-purple"
        {...register(name, { required })}
        id={id}
      >
        {data?.map((item) => {
          return (
            <option className="py-2" key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      {required && <p className="text-xs text-purple mt-1">Fieds required</p>}
    </label>
  );
}

export default SelectInputProjectId;
