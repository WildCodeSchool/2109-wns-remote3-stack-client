import { getProjectById } from '@api/types/getProjectById';
import React from 'react';

interface IProps {
  data: getProjectById;
}

function ProjectUser({ data }: IProps): JSX.Element {
  return (
    <div className="lg:w-1/2 lg:ml-5">
      <div className="w-full flex justify-between items-end border-b border-lightPurple pb-2">
        <h2 className="text-xl text-lightPurple w-6/12 lg:w-8/12">
          Assigned users
        </h2>
        <button className="text-sm flex items-center" type="button">
          Manage users
        </button>
      </div>
      {data.getProjectByID.members.length === 0 && (
        <p className="mt-5 text-xs text-lightPurple">
          There is no users in this project for the moment
        </p>
      )}
    </div>
  );
}

export default ProjectUser;
