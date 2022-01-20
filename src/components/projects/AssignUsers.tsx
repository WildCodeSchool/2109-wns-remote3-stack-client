import { GET_ALL_USERS } from '@api/queries/usersQueries';
import { useMutation, useQuery } from '@apollo/client';
import React, { SetStateAction, Dispatch, useState } from 'react';
import close from '@assets/icons/close.svg';
import { CREATE_USER_PROJECT } from '@api/queries/userProject';
import { GET_ONE_PROJECT } from '@api/queries/projectQueries';
import User from './User';
import UserRole from './UserRole';

interface IProps {
  setIsUsersProjectModal: Dispatch<SetStateAction<boolean>>;
  project: IProject;
  userToAssign: IUser | undefined;
  setUserToAssign: Dispatch<SetStateAction<IUser | undefined>>;
}

function AssignUsers({
  setIsUsersProjectModal,
  project,
  userToAssign,
  setUserToAssign,
}: IProps): JSX.Element {
  const [projectRoleSelected, setProjectRoleSelected] = useState('');

  // GET ALL USERS
  const { loading, error, data } = useQuery<getAllUsers>(GET_ALL_USERS);

  // CREATE A USER PROJECT
  const [createUserProject, { loading: createLoading, error: createError }] =
    useMutation(CREATE_USER_PROJECT, {
      variables: {
        userId: userToAssign?.id,
        projectId: project.getProjectByID.id,
        projectRole: projectRoleSelected,
      },
      refetchQueries: [GET_ONE_PROJECT],
      onCompleted: () => {
        setUserToAssign(undefined);
        setIsUsersProjectModal(false);
      },
    });

  if (loading || createLoading) {
    return <p>...loading</p>;
  }
  if (error || !data || createError) {
    return <p>error</p>;
  }
  return (
    <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center ">
      <div className="bg-darkBlue h-full lg:h-modal rounded-xl shadow-2xl  lg:w-5/12">
        <div className="p-4  lg:px-7">
          <div className="w-full flex justify-between items-center my-2">
            <h2 className="lg:text-xl">Assigne Users</h2>
            <button
              onClick={() => {
                setIsUsersProjectModal(false);
                setUserToAssign(undefined);
              }}
              type="button"
            >
              <img className="h-5 w-5" src={close} alt="" />
            </button>
          </div>
          <input
            placeholder="search"
            className="bg-transparent mt-3 border w-8/12 rounded-md focus:outline-none p-2 border-lightPurple"
            type="text"
          />
        </div>
        {userToAssign === undefined ? (
          <div className="p-4 lg:py-0 lg:px-7">
            {data.getAllUsers.map((item) => {
              return (
                <div key={item.id}>
                  <User
                    setIsUsersProjectModal={setIsUsersProjectModal}
                    projectId={project.getProjectByID.id}
                    setUserToAssign={setUserToAssign}
                    userId={item.id}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <UserRole
            userToAssign={userToAssign}
            project={project}
            setProjectRoleSelected={setProjectRoleSelected}
            createUserProject={createUserProject}
          />
        )}
      </div>
    </div>
  );
}

export default AssignUsers;
