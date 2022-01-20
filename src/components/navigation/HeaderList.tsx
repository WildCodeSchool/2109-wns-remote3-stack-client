import React, { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import add from '@assets/icons/add.svg';

interface IProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  name: string;
}

function HeaderList({ setIsModal, name }: IProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className="pt-5 bg-darkBlue border-b border-purple lg:w-full px-4 lg:px-6">
      <h1 className="text-2xl  mt-2 lg:mt-0 font-lexend text-purple">{name}</h1>
      <div className="flex w-full justify-between mt-5  pb-2">
        <div className="flex">
          <Link
            className={`mr-4 ${pathname === '/tasks' && 'text-purple'}`}
            to="/tasks"
          >
            Tasks
          </Link>
          <Link
            className={`${pathname === '/projects' && 'text-purple'}`}
            to="/projects"
          >
            Projects
          </Link>
        </div>
        <button
          onClick={() => setIsModal(true)}
          type="button"
          className="flex items-center"
        >
          <img className="h-4 w-4 mr-2" src={add} alt="" />
          {name === 'Projects List' ? <p> Add Projects</p> : <p>Create task</p>}
        </button>
      </div>
    </div>
  );
}

export default HeaderList;
