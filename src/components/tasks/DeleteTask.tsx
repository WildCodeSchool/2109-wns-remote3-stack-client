import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../../API/mutation/deleteTasks';

interface IProps {
  item: ITask;
}

function DeleteTask({ item }: IProps): JSX.Element {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const router = useHistory();

  const [deleteTask, { loading, error }] = useMutation(DELETE_TASK, {
    onCompleted: () => {
      router.push('/tasks');
      toast('Task successfully deleted');
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
    <div>
      {isDeleteModal && (
        <div>
          <p>Etes vous sure de vouloir supprimer ?</p>
          <button
            type="button"
            onClick={() =>
              deleteTask({
                variables: { deleteTaskByIdId: item.getTaskByID.id },
              })
            }
          >
            OUI
          </button>
          <button type="button" onClick={() => setIsDeleteModal(false)}>
            NON
          </button>
        </div>
      )}
      <button onClick={() => setIsDeleteModal(true)} type="button">
        delete
      </button>
    </div>
  );
}

export default DeleteTask;
