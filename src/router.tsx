import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Profil from './views/Profil';
import ProjectList from './views/projects/ProjectList';
import Settings from './views/Settings';
import TaskList from './views/tasks/TaskList';
import UsersList from './views/UsersList';
import Page404 from './views/Page404';
import ProjectDetails from './views/projects/ProjectDetails';

function Routes(): JSX.Element {
  return (
    <div>
      {' '}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/projectsettings" />
      <Route exact path="/tasks" component={TaskList} />
      <Route exact path="/users" component={UsersList} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/profil" component={Profil} />
      <Route exact path="/error404" component={Page404} />
      <Route path="/project/:id" component={ProjectDetails} />
    </div>
  );
}

export default Routes;
