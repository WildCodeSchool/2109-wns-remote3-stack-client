import React, { useState } from 'react';
import { Switch } from 'react-router-dom';

import Sidebar from '@components/navigation/Sidebar';
import Header from '@components/Header';
import Routes from '../router';

function Layout(): JSX.Element {
  const [isSideBar, setIsSidebar] = useState(false);
  return (
    <div className="h-screen w-screen p-5 lg:flex lg:flex-col lg:items-end  bg-darkBlue font-lexend text-white font-bold">
      <Sidebar setIsSidebar={setIsSidebar} isSideBar={isSideBar} />
      <Header setIsSidebar={setIsSidebar} />
      <div className="lg:w-10/12 ">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
