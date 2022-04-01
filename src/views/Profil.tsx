import { GET_ALL_PROJECTS } from '@api/queries/projectQueries';
import { GET_ALL_TASKS } from '@api/queries/taskQueries';
import { GET_SELF } from '@api/queries/userQueries';
import { GetAllProjects_getAllProjects } from '@api/types/GetAllProjects';
import { GetAllTasks_getAllTasks } from '@api/types/GetAllTasks';
import { GetSelf_getSelf } from '@api/types/GetSelf';
import { useQuery } from '@apollo/client';
import OneProject from '@components/projects/OneProject';
import OneTask from '@components/tasks/OneTask';
// import OneTask from '@components/tasks/OneTask';
import React from 'react';

interface IResponse {
  getAllTasks: GetAllTasks_getAllTasks[];
  getAllProjects: GetAllProjects_getAllProjects[];
  getSelf: GetSelf_getSelf;
}

function Profil(): JSX.Element {
  const {
    loading: loadingTask,
    error: errorTask,
    data: dataTask,
  } = useQuery<IResponse>(GET_ALL_TASKS);

  const {
    loading: loadingProject,
    error: errorProject,
    data: dataProject,
  } = useQuery<IResponse>(GET_ALL_PROJECTS);

  const {
    loading: loadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery<IResponse>(GET_SELF);

  if (loadingTask || loadingProject || loadingUser) {
    return <p>...loading</p>;
  }
  if (errorTask || !dataTask) {
    return <p>error</p>;
  }
  if (errorProject || !dataProject) {
    return <p>error</p>;
  }

  if (errorUser || !dataUser) {
    return <p>error</p>;
  }

  return (
    <div className="lg:flex justify-around ml-5 mr-5 mt-20">
      {/* Task Assigned */}
      <div className="">
        <p className="font-normal text-purple text-xl">Task Assigned</p>
        {dataTask.getAllTasks.map((item) => {
          return (
            <div key={item.id}>
              <OneTask item={item} />
            </div>
          );
        })}
        {dataTask.getAllTasks.length === 0 && (
          <p className="font-normal lg:py-2 py-2 text-white">
            You have no tasks for now
          </p>
        )}
      </div>
      {/* Profil infos */}
      <div className="invisible lg:visible">
        <div className="absolute border border-purple bg-darkBlue h-5/6">
          {}
        </div>
      </div>
      <div className="">
        <div className="flex">
          <div className="h-20 w-20 mb-5 rounded-full border-4 lg:border-2 border-purple">
            {dataUser.getSelf.avatar}
          </div>
          <div className="ml-4 mt-2">
            <p className="text-2xl antialiased ">
              {dataUser.getSelf.firstName}
            </p>
            <p className="font-light antialiased text-gray-300">
              {dataUser.getSelf.email}
            </p>
          </div>
          {dataUser.getSelf.firstName &&
            dataUser.getSelf.firstName === null && (
              <p className="font-normal lg:py-2 py-2 text-white">
                You have no informations
              </p>
            )}
        </div>
        <div className=" bg-darkBlue border-b border-purple"> </div>
        {/* Projects Assigned */}
        <div className="mt-4">
          <p className="font-normal text-purple text-xl">Project Assigned</p>
          {dataProject.getAllProjects.map((item) => {
            return (
              <div key={item.id}>
                <OneProject item={item} />
              </div>
            );
          })}
          {dataProject.getAllProjects.length === 0 && (
            <p className="font-normal lg:py-2 py-2 text-white">
              You have no projects for now
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profil;
