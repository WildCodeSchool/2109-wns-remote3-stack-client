import React, { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import add from '../../assets/icons/add.svg';

interface IProps {
  setIsForm: Dispatch<SetStateAction<boolean>>;
}

function HeaderList({ setIsForm }: IProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div>
      <h1 className="text-2xl font-lexend text-purple">Project List</h1>
      <div className="flex w-full justify-between mt-5 border-b border-purple pb-2">
        <div className="flex">
          <Link
            className={` mr-2 lg:mr-4 ${
              pathname === '/tasks' && 'text-purple'
            }`}
            to="/tasks"
          >
            Task
          </Link>
          <Link
            className={`${pathname === '/projects' && 'text-purple'}`}
            to="/projects"
          >
            Projects
          </Link>
        </div>
        <button
          onClick={() => setIsForm(true)}
          type="button"
          className="flex items-center"
        >
          <img className="h-4 w-4 mr-2" src={add} alt="" />
          Add Projects
        </button>
      </div>
    </div>
  );
}

export default HeaderList;
