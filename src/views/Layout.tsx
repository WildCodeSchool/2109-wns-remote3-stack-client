import React, { useState } from 'react';
import { Switch } from 'react-router-dom';

import Routes from '../router';
import Sidebar from '../components/navigation/navigation/Sidebar';
import Header from '../components/Header';

function Layout(): JSX.Element {
  const [isSideBar, setIsSidebar] = useState(false);
  return (
    <div className="h-screen w-screen p-5  bg-darkBlue font-lexend text-white font-bold">
      {isSideBar && <Sidebar setIsSidebar={setIsSidebar} />}
      <Header setIsSidebar={setIsSidebar} />
      <div>
        <Switch>
          <Routes />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
