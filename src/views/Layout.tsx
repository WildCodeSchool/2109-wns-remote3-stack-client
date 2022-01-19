import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import Sidebar from '@components/navigation/Sidebar';
import Header from '@components/Header';
import Routes from '../router';

function Layout(): JSX.Element {
  const [isSideBar, setIsSidebar] = useState(false);
  return (
    <div className="min-h-screen  w-screen pb-5 lg:flex lg:flex-col lg:items-end  bg-darkBlue font-lexend text-white">
      <Sidebar setIsSidebar={setIsSidebar} isSideBar={isSideBar} />
      <Header setIsSidebar={setIsSidebar} />
      <div className="lg:w-10/12 mr-1">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
