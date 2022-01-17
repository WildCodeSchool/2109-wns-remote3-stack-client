import React from 'react';
import { Route } from 'react-router-dom';
import Profil from './views/Profil';
import ProjectList from './views/ProjectList';
import Settings from './views/Settings';
import TaskList from './views/TaskList';
import UsersList from './views/UsersList';
import Page404 from './views/Page404';

function Routes(): JSX.Element {
  return (
    <div>
      {' '}
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/tasks" component={TaskList} />
      <Route exact path="/users" component={UsersList} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/profil" component={Profil} />
      <Route exact path="/error404" component={Page404} />
    </div>
  );
}

export default Routes;
