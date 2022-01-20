/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  data: ITagList[];
  label: string;
  name: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
}

function SelectInputTag({
  label,
  data,
  name,
  id,
  register,
  required,
}: IProps): JSX.Element {
  return (
    <div>
      <p>{label}</p>
      <label htmlFor={id}>
        {data?.map((item) => {
          return (
            <div>
              <input
                {...register(name, { required })}
                id={id}
                type="checkbox"
                className="py-2"
                key={item.id}
                value={[item.label, item.color]}
              />
              {item.label}
            </div>
          );
        })}
      </label>
    </div>
  );
}

export default SelectInputTag;
