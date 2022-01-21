import React, { Dispatch, SetStateAction, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ONE_USER } from '@api/queries/usersQueries';
import { GET_USER_WITH_PROJECT } from '@api/queries/userQueries';
import { DELETE_USER_PROJECT } from '@api/queries/userProject';
import { GET_ONE_PROJECT } from '@api/queries/projectQueries';
import Avatar from './Avatar';

interface IProps {
  userId: string;
  setUserToAssign: Dispatch<SetStateAction<IUser | undefined>>;
  projectId: string;
  setIsUsersProjectModal: Dispatch<SetStateAction<boolean>>;
  isUsersProjectModal: boolean;
  projectRole: string;
}

function User({
  userId,
  setUserToAssign,
  projectId,
  setIsUsersProjectModal,
  isUsersProjectModal,
  projectRole,
}: IProps): JSX.Element {
  const [isAssigned, setIsAssigned] = useState(false);
  const [role, setRole] = useState(projectRole);
  // GET ONE USER
  const { data, loading, error } = useQuery<getUserByID>(GET_ONE_USER, {
    variables: { getUserByIdId: userId },
  });

  // GET PROJECT LIST OF THE USER
  useQuery<getUserWithProjects>(GET_USER_WITH_PROJECT, {
    variables: { getUserWithProjectsId: userId },
    onCompleted: (d) => {
      // CHECK IF THE PROJECT IS IN THE LIST
      const checkProject = d.getUserWithProjects.projects.filter(
        (item) => item.projectId === projectId
      );

      // IF THE LENGHT OF CHECKROLE IS DIFFERENT THAN 0 SO THE USER IS ALREADY ASSIGN TO THIS PROJECT
      if (checkProject.length !== 0) {
        setIsAssigned(true);
        setRole(checkProject[0].projectRole);
      }
    },
  });

  // DELETE USER PROJECT
  const [deleteUserProject, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_USER_PROJECT, {
      variables: { projectId, userId },
      refetchQueries: [GET_ONE_PROJECT, GET_USER_WITH_PROJECT],
      onCompleted: () => {
        setIsUsersProjectModal(false);
        setIsAssigned(false);
      },
    });

  if (loading || deleteLoading) {
    return <p>...loading</p>;
  }
  if (error || !data || deleteError) {
    return <p>error</p>;
  }

  return (
    <div className="my-4  border-b  border-lightPurple hover:bg-darkGray duration-300 ">
      <div className="w-full lg:px-4 lg:pb-2 flex flex-col lg:flex-row justify-between items-center py-3 ">
        <Avatar data={data.getUserByID} />
        {isAssigned || !isUsersProjectModal ? (
          <div className="h-full flex flex-col items-end justify-between">
            <p className="text-xs text-green-600">Assigned as {role}</p>
            <button
              onClick={() => deleteUserProject()}
              type="button"
              className="text-xs mt-3 underline text-lightGray"
            >
              Remove from the project
            </button>
          </div>
        ) : (
          <button
            onClick={() => setUserToAssign(data.getUserByID)}
            className="bg-purple text-sm px-4 py-1 rounded-sm transform hover:scale-110 duration-300"
            type="button"
          >
            Assign
          </button>
        )}
      </div>
    </div>
  );
}

export default User;
