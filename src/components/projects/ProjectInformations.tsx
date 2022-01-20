import React, { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '@api/queries/projectQueries';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import ProjectOwner from './ProjectOwner';
import settings from '../../assets/icons/settings.svg';
import trash from '../../assets/icons/trash.svg';

interface IProps {
  data: IProject;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

function ProjectInformations({ data, setIsModal }: IProps): JSX.Element {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const router = useHistory();

  const [deleteProject, { loading, error }] = useMutation(DELETE_PROJECT, {
    onCompleted: () => {
      setIsDeleteModal(false);
      router.push('/projects');
      toast('Project successfully deleted');
      window.location.reload();
    },
  });

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    toast('Oops something bad happen');
  }
  return (
    <div className="lg:w-1/2  rounded-md lg:p-5 lg:border border-lightPurple">
      {isDeleteModal && (
        <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center ">
          <div className="p-5 lg:pr-8 bg-darkBlue h-32 rounded-md shadow-2xl  lg:w-3/12">
            <p className="mb-5 text-xl">Delete {data.getProjectByID.name} ?</p>
            <button
              className="bg-purple px-8 py-2 rounded-md"
              onClick={() =>
                deleteProject({
                  variables: { deleteProjectByIdId: data.getProjectByID.id },
                })
              }
              type="button"
            >
              Yes
            </button>
            <button
              className="bg-purple px-8 py-2 rounded-md ml-5"
              onClick={() => setIsDeleteModal(false)}
              type="button"
            >
              No
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-col items-start lg:flex-row w-full justify-between">
        <ProjectOwner />
        <button
          onClick={() => setIsModal(true)}
          type="button"
          className="text-left flex text-sm underline mt-5"
        >
          {` Update project's informations`}
          <img src={settings} className="ml-2 h-5 w-5" alt="" />
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
      <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between mt-2">
        <div className="flex">
          Estimmee spend time:
          <p className="ml-2 text-lightPurple">
            {data.getProjectByID.estimeeSpentTime} hours
          </p>
        </div>
        <button
          onClick={() => setIsDeleteModal(true)}
          type="button"
          className="text-left mt-5 lg:mt-0 flex text-sm underline"
        >
          delete project
          <img src={trash} className="ml-2 h-5 w-5" alt="" />
        </button>
      </div>
    </div>
  );
}

export default ProjectInformations;
