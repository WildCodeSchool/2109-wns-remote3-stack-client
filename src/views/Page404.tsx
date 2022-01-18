import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '@assets/icons/arrow.svg';
import logoWithoutText from '@assets/logoWithoutText.svg';

function Header(): JSX.Element {
  return (
    <div className="text-center mt-36 space-y-8">
      <img className="w-10 m-auto" src={logoWithoutText} alt="logo-stack" />
      <h1 className="text-purple">404 ERROR</h1>
      <h2 className="text-4xl">Page Not Found</h2>
      <p className="font-light">
        Sorry, we couldn&lsquo;t find the page you&lsquo;re looking for.
      </p>
      <Link to="/">
        <button
          type="button"
          className="hover:opacity-100 opacity-80 flex items-center m-auto pt-5"
        >
          <p className="text-xs text-center text-purple">Go back home</p>
          <img className="ml-2" src={arrow} alt="go-back-home" />
        </button>
      </Link>
    </div>
  );
}

export default Header;
