import React from 'react';

interface IProps {
  children: React.ReactNode;
}

function DeleteModal({ children }: IProps): JSX.Element {
  return (
    <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center ">
      <div className="p-5 lg:pr-8 bg-darkBlue h-32 rounded-md shadow-2xl  lg:w-3/12">
        {children}
      </div>
    </div>
  );
}

export default DeleteModal;
