import React, { useState } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import Sidebar from '@components/navigation/Sidebar';
import Header from '@components/Header';
import { useQuery } from '@apollo/client';
import { GET_SELF } from '@api/queries/userQueries';
import { useUserFromStore } from '@store/user.slice';
import { GetSelf } from '@api/types/GetSelf';
import Routes from '../router';

function Layout(): JSX.Element {
  const [isSideBar, setIsSidebar] = useState(false);
  const { dispatchSelf } = useUserFromStore();
  const history = useHistory();
  useQuery<GetSelf>(GET_SELF, {
    onCompleted: (data) => dispatchSelf(data.getSelf),
    onError: () => history.push('/login'),
  });

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
