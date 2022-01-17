import React, { Dispatch, SetStateAction } from 'react';
import close from '../../assets/icons/close.svg';

interface IProps {
  isForm: boolean;
  setIsForm: Dispatch<SetStateAction<boolean>>;
}

function CreateUpdateProject({ isForm, setIsForm }: IProps): JSX.Element {
  return (
    <div
      className={`py-4 w-0 border-r border-purple  pr-5 ${
        isForm && 'transform w-6/12 duration-500'
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg">CreateUpdateProject</h2>
        <button onClick={() => setIsForm(false)} type="button" className="">
          <img className="h-5 w-5" src={close} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CreateUpdateProject;
