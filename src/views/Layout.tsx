import React from 'react';
import logo from '../assets/logo.svg';

function Layout(): JSX.Element {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-5xl bg-darkBlue font-lexend text-white font-bold">
      <img className="mb-32" src={logo} alt="" />
    </div>
  );
}

export default Layout;
