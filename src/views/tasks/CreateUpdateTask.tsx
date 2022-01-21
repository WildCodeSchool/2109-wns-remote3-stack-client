import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import close from '@assets/icons/close.svg';

interface IProps {
  isForm: boolean;
  setIsForm: Dispatch<SetStateAction<boolean>>;
}

function CreateUpdateTask({ isForm, setIsForm }: IProps): JSX.Element {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('hello');
  };
  return (
    <div
      className={`py-4 w-0 border-r border-purple  pr-5 ${
        isForm && 'transform w-6/12 duration-500'
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg">CreateUpdateTask</h2>
        <button onClick={() => setIsForm(false)} type="button" className="">
          <img className="h-5 w-5" src={close} alt="" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} action="create/Update task">
        <label htmlFor="name">
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default CreateUpdateTask;
