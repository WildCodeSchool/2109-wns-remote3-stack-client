/* eslint-disable react/jsx-curly-brace-presence */
import OneTask from '@components/tasks/OneTask';
import add from '@assets/icons/add.svg';
import React from 'react';
import { getProjectById } from '@api/types/getProjectById';

interface IProps {
  data: getProjectById;
}

function ProjectTask({ data }: IProps): JSX.Element {
  return (
    <div className="lg:w-1/2 lg:mr-5">
      <div className="flex w-full justify-between pr-5  pb-2 items-center border-b border-lightPurple">
        <h2 className="text-xl text-lightPurple w-6/12 lg:w-8/12">
          {`Project's Tasks`}
        </h2>
        <button className="text-sm flex items-center" type="button">
          <img className="h-3 w-3 mr-1" src={add} alt="" />
          Create new task
        </button>
      </div>
      {data.getProjectByID.tasks.length === 0 ? (
        <p className="mt-5 text-xs text-lightPurple">
          There is no tasks in this project for the moment
        </p>
      ) : (
        <div>
          {data.getProjectByID.tasks.map((item) => {
            return <OneTask isForm={false} item={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProjectTask;
