import React, { useState, Dispatch, SetStateAction } from 'react';
import DeleteModal from '@components/modal/DeleteModal';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { getTaskByID } from '../../API/types/getTaskByID';
import { DELETE_TASK } from '../../API/mutation/deleteTasks';
import { GET_ALL_TASKS } from '../../API/queries/taskQueries';
import settings from '../../assets/icons/settings.svg';
import trash from '../../assets/icons/trash.svg';

interface IProps {
  data: getTaskByID;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

function TaskInformation({ data, setIsModal }: IProps): JSX.Element {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const router = useHistory();

  const [deleteTask, { loading, error }] = useMutation(DELETE_TASK, {
    refetchQueries: [
      {
        query: GET_ALL_TASKS,
      },
    ],
    onCompleted: () => {
      router.push('/tasks');
      toast('Task successfully deleted');
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
        <DeleteModal>
          <p className="mb-5 text-xl">Delete {data.getTaskByID.subject} ?</p>
          <button
            className="bg-purple px-8 py-2 rounded-md"
            onClick={() =>
              deleteTask({
                variables: { taskId: data.getTaskByID.id },
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
        </DeleteModal>
      )}
      <div className="flex flex-col items-start lg:flex-row w-full justify-between">
        <button
          onClick={() => setIsModal(true)}
          type="button"
          className="text-left hover:text-purple flex text-sm underline mt-5"
        >
          {` Update task's informations`}
          <img src={settings} className="ml-2 h-5 w-5" alt="" />
        </button>
      </div>
      <div className="flex mt-5">
        Status:
        <p className="ml-2 text-lightPurple">{data.getTaskByID.advancement}</p>
      </div>
      <div className="flex mt-2">
        Due date:
        <p className="ml-2 text-lightPurple">
          {new Date(data.getTaskByID.endDate).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between mt-2">
        <div className="flex">
          Estimmee spend time:
          <p className="ml-2 text-lightPurple">
            {data.getTaskByID.estimeeSpentTime} hours
          </p>
        </div>
        <button
          onClick={() => setIsDeleteModal(true)}
          type="button"
          className="text-left mt-5 hover:text-purple lg:mt-0 flex text-sm underline"
        >
          delete task
          <img src={trash} className="ml-2 h-5 w-5" alt="" />
        </button>
      </div>
    </div>
  );
}

export default TaskInformation;
