import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import DeleteTask from '@components/tasks/DeleteTask';
import * as queries from '../../API/queries/taskQueries';
import CreateUpdateTask from './CreateUpdateTask';

function TaskDetails(): JSX.Element {
  const [isModal, setIsModal] = useState(false);
  const { id }: { id: string } = useParams();

  const { loading, error, data } = useQuery<ITask>(queries.GET_ONE_TASK, {
    variables: { getTaskByIdId: id },
  });
  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <>
      {data && (
        <div className="lg:flex justify-between mt-9">
          {data.getTaskByID.id}
          <DeleteTask item={data} />
          <button
            onClick={() => setIsModal(true)}
            type="button"
            className="text-left text-sm underline mt-5"
          >
            {` Update project's informations`}
          </button>
          {isModal && (
            <CreateUpdateTask
              taskId={data.getTaskByID.id}
              setIsModal={setIsModal}
              onTaskCreated={() => console.log('')}
            />
          )}
        </div>
      )}
    </>
  );
}
export default TaskDetails;
