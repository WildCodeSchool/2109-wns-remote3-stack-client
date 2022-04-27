import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  setNavLink: Dispatch<SetStateAction<string>>;
  navLink: string;
}

function NavMobile({ setNavLink, navLink }: IProps): JSX.Element {
  return (
    <div className="flex mt-8 lg:hidden  mb-5  pb-2">
      <button
        onClick={() => setNavLink('task')}
        // IF ONCLIK TASK SET TEXT PURPLE
        className={`mr-5 ${navLink === 'task' && 'text-lightPurple'}`}
        type="button"
      >
        Tasks
      </button>

      <button
        // IF ONCLIK TASK SET TEXT PURPLE
        className={`${navLink === 'users' && 'text-lightPurple'}`}
        onClick={() => setNavLink('users')}
        type="button"
      >
        Assigned users
      </button>
    </div>
  );
}

export default NavMobile;
