import React, { Dispatch, SetStateAction } from 'react';
import logo from '../assets/logo.svg';
import burger from '../assets/icons/burger.svg';
import { Link } from 'react-router-dom';

interface IProps {
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

function Header({ setIsSidebar }: IProps): JSX.Element {
  return (
    <div className="flex lg:flex-row-reverse  items-center w-full justify-between">
      <Link to="/tasks">
        <img className="h-10" src={logo} alt="stack" />
      </Link>
      <button onClick={() => setIsSidebar(true)}>
        <img className="h-6 lg:h-5" src={burger} alt="menu" />
      </button>
    </div>
  );
}

export default Header;
