import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo.svg';
import burger from '@assets/icons/burger.svg';
import { format } from 'date-fns';

interface IProps {
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

function Header({ setIsSidebar }: IProps): JSX.Element {
  const today = format(new Date(), 'EEEE dd MMMM');

  return (
    <div className="flex lg:w-11/12  px-4 lg:px-10 pt-5 lg:flex-row-reverse  items-center w-full justify-between">
      <Link to="/tasks">
        <img className="h-8" src={logo} alt="stack" />
      </Link>
      <p className="ml-28 hidden lg:flex">{today}</p>
      <button
        className="lg:hidden"
        type="button"
        onClick={() => setIsSidebar(true)}
      >
        <img className="h-6 lg:h-5" src={burger} alt="menu" />
      </button>
    </div>
  );
}

export default Header;
