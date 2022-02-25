import React from 'react';

interface IProps {
  children: JSX.Element;
}

function LogContainer({ children }: IProps): JSX.Element {
  return (
    <div className="flex items-center bg-darkBlue justify-center md:h-screen md:w-screen absolute inset-0 z-50">
      <div className="flex flex-col items-center lg:flex lg:flex-row md:items-start md:justify-start">
        <div className="m-auto lg:w-96 lg:mr-10">
          <div className="lg:text-6xl text-4xl  text-left bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-5 drop-shadow-lg">
            Welcome to Stack.
          </div>
          <div className="bg-clip-text mb-10 md:mb-0 hidden lg:flex text-lightGray ">
            Get your work done. Stack helps you to manage your projects, create
            tasks, and many more.
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default LogContainer;
