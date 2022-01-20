import React, { useState } from 'react';
import AssignUsers from './AssignUsers';
import User from './User';

interface IProps {
  data: IProject;
}

function ProjectUser({ data }: IProps): JSX.Element {
  const [userToAssign, setUserToAssign] = useState<IUser>();
  const [isUsersProjectModal, setIsUsersProjectModal] = useState(false);

  return (
    <div className="lg:w-1/2 lg:ml-5 bg-darkGray p-5 rounded-md">
      {isUsersProjectModal && (
        <AssignUsers
          setUserToAssign={setUserToAssign}
          userToAssign={userToAssign}
          project={data}
          setIsUsersProjectModal={setIsUsersProjectModal}
        />
      )}
      <div className="w-full flex justify-between items-end border-b border-lightPurple pb-2">
        <h2 className="text-xl text-lightPurple w-6/12 lg:w-8/12">
          Assigned users
        </h2>
        <button
          onClick={() => setIsUsersProjectModal(true)}
          className="text-sm flex items-center"
          type="button"
        >
          Manage users
        </button>
      </div>
      {data.getProjectByID.members.length === 0 ? (
        <div>
          <p className="mt-5 text-xs text-lightPurple">
            There is no users in this project for the moment
          </p>
          <button
            onClick={() => setIsUsersProjectModal(true)}
            type="button"
            className="bg-purple items-center  justify-center p-2 w-5/12  mt-2 lg:mt-5 rounded-md flex"
          >
            Assigne users
          </button>
        </div>
      ) : (
        <div>
          {data.getProjectByID.members.map((item) => {
            return (
              <div key={item.userId}>
                <User
                  setIsUsersProjectModal={setIsUsersProjectModal}
                  projectId={data.getProjectByID.id}
                  setUserToAssign={setUserToAssign}
                  userId={item.userId}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProjectUser;
