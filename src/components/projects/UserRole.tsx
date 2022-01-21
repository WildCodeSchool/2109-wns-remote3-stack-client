import { getProjectById } from '@api/types/getProjectById';
import { GetUserByID } from '@api/types/GetUserByID';
import React, { Dispatch, SetStateAction } from 'react';
import Avatar from './Avatar';

interface IProps {
  userToAssign: GetUserByID | undefined;
  setProjectRoleSelected: Dispatch<SetStateAction<string>>;
  project: getProjectById;
  createUserProject: () => void;
}

function UserRole({
  createUserProject,
  userToAssign,
  project,
  setProjectRoleSelected,
}: IProps): JSX.Element {
  // PROJECT ROLE ARRAY
  const projectRole = [
    'DEVELOPPER',
    'UX_DESIGNER',
    'DEVOPS',
    'PROJECT_MANAGER',
  ];
  return (
    <div className="px-7 mt-5">
      <p className="text-lg">
        You want to assign{' '}
        <span className="text-lightPurple">
          {userToAssign?.getUserByID.firstName}{' '}
        </span>
        <span className="text-lightPurple">
          {userToAssign?.getUserByID.lastName}
        </span>{' '}
        to the{' '}
        <span className="text-lightPurple">{project.getProjectByID.name}</span>{' '}
        project
      </p>
      <div className="mt-5 w-full">
        <Avatar data={userToAssign as GetUserByID} />
        <div className="mt-5 flex items-end w-full">
          <div className="flex flex-col w-8/12">
            <p className="">Assign as</p>
            <select
              onChange={(e) => setProjectRoleSelected(e.target.value)}
              className="w-10/12 mt-2 border-lightPurple text-sm p-2 border bg-darkBlue"
            >
              {projectRole.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            onClick={() => createUserProject()}
            className=" bg-purple w-4/12 rounded-md transform hover:scale-105 duration-300 py-2"
            type="button"
          >
            Assign user
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserRole;
