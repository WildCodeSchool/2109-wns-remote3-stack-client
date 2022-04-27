import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import close from '@assets/icons/close.svg';
import settings from '@assets/icons/settings.svg';

interface IProps {
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

function Header({ setIsSidebar }: IProps): JSX.Element {
  return (
    <div className="flex items-center w-full justify-between">
      <Link to="/settings">
        <button onClick={() => setIsSidebar(false)} type="button">
          <img className="h-6 lg:h-5" src={settings} alt="settings" />
        </button>
      </Link>
      <button type="button" onClick={() => setIsSidebar(false)}>
        <img className="h-5 lg:h-4 lg:hidden" src={close} alt="close" />
      </button>
    </div>
  );
}

export default Header;
