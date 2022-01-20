import React, { Dispatch, SetStateAction } from 'react';
import ProjectOwner from './ProjectOwner';

interface IProps {
  data: IProject;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

function ProjectInformations({ data, setIsModal }: IProps): JSX.Element {
  return (
    <div className="lg:w-1/2  rounded-md lg:p-5 lg:border border-lightPurple">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <ProjectOwner />
        <button
          onClick={() => setIsModal(true)}
          type="button"
          className="text-left text-sm underline mt-5"
        >
          {` Update project's informations`}
        </button>
      </div>
      <div className="flex mt-5">
        Status:
        <p className="ml-2 text-lightPurple">{data.getProjectByID.status}</p>
      </div>
      <div className="flex mt-2">
        Due date:
        <p className="ml-2 text-lightPurple">
          {new Date(data.getProjectByID.endDate).toLocaleDateString()}
        </p>
      </div>
      <div className="flex mt-2">
        Estimmee spend time:
        <p className="ml-2 text-lightPurple">
          {data.getProjectByID.estimeeSpentTime} hours
        </p>
      </div>
    </div>
  );
}

export default ProjectInformations;
