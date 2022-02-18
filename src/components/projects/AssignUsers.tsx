import { GET_ALL_USERS } from '@api/queries/usersQueries';
import { useMutation, useQuery } from '@apollo/client';
import React, { SetStateAction, Dispatch, useState } from 'react';
import close from '@assets/icons/close.svg';
import { GET_USER_WITH_PROJECT } from '@api/queries/userQueries';
import { GET_ONE_PROJECT } from '@api/queries/projectQueries';
import { CREATE_USER_PROJECT } from '@api/mutation/userProject';
import { getProjectById } from '@api/types/getProjectById';
import { GetAllUsers } from '@api/types/GetAllUsers';
import { GetUserByID } from '@api/types/GetUserByID';
import User from './User';
import UserRole from './UserRole';

interface IProps {
  setIsUsersProjectModal: Dispatch<SetStateAction<boolean>>;
  project: getProjectById;
  userToAssign: GetUserByID | undefined;
  setUserToAssign: Dispatch<SetStateAction<GetUserByID | undefined>>;
  isUsersProjectModal: boolean;
}

function AssignUsers({
  setIsUsersProjectModal,
  project,
  userToAssign,
  setUserToAssign,
  isUsersProjectModal,
}: IProps): JSX.Element {
  const [projectRoleSelected, setProjectRoleSelected] = useState('DEVELOPPER');
  const [searchValue, setSearchValue] = useState('');

  // GET ALL USERS
  const { loading, error, data } = useQuery<GetAllUsers>(GET_ALL_USERS);

  // CREATE A USER PROJECT
  const [createUserProject, { loading: createLoading, error: createError }] =
    useMutation(CREATE_USER_PROJECT, {
      variables: {
        userId: userToAssign?.getUserByID.id,
        projectId: project.getProjectByID.id,
        projectRole: projectRoleSelected,
      },
      onCompleted: () => {
        setUserToAssign(undefined);
        setIsUsersProjectModal(false);
      },
      refetchQueries: [GET_ONE_PROJECT, GET_USER_WITH_PROJECT],
    });

  if (loading || createLoading) {
    return <p>...loading</p>;
  }
  if (error || !data || createError) {
    return <p>error</p>;
  }

  return (
    <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center ">
      <div className="bg-darkBlue h-full lg:h-96 rounded-xl shadow-2xl  lg:w-5/12">
        <div className="p-4  lg:px-7 shadow-2xl">
          <div className="w-full flex justify-between items-center mt-2">
            <h2 className="lg:text-lg">Assigne Users</h2>
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
            className="bg-transparent text-sm h-9 mt-3 border w-8/12 rounded-md focus:outline-none p-2 border-lightPurple"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {userToAssign === undefined ? (
          <div className="p-4 lg:py-0 lg:px-7  h-64 overflow-y-scroll">
            {searchValue === '' ? (
              <div>
                {data.getAllUsers.map((item) => {
                  return (
                    <div key={item.id}>
                      <User
                        projectRole=""
                        isUsersProjectModal={isUsersProjectModal}
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
              <div>
                {data.getAllUsers
                  .filter(
                    (item) =>
                      item.firstName.toLocaleLowerCase() ===
                      searchValue.toLocaleLowerCase()
                  )
                  .map((item) => {
                    return (
                      <div key={item.id}>
                        <User
                          projectRole=""
                          isUsersProjectModal={isUsersProjectModal}
                          setIsUsersProjectModal={setIsUsersProjectModal}
                          projectId={project.getProjectByID.id}
                          setUserToAssign={setUserToAssign}
                          userId={item.id}
                        />
                      </div>
                    );
                  })}
                {data.getAllUsers.filter(
                  (item) =>
                    item.firstName.toLowerCase() === searchValue.toLowerCase()
                ).length === 0 && (
                  <p className="text-pink text-sm">
                    Wilder not found.. try with a other username
                  </p>
                )}
              </div>
            )}
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
