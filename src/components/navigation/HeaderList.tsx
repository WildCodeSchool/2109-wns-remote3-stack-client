import React, { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import add from '../../assets/icons/add.svg';

interface IProps {
  setIsForm: Dispatch<SetStateAction<boolean>>;
  name: string;
}

function HeaderList({ setIsForm, name }: IProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div>
      <h1 className="text-2xl mt-2 font-lexend text-purple">{name}</h1>
      <div className="flex w-full justify-between mt-5 border-b border-purple pb-2">
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
          onClick={() => setIsForm(true)}
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
