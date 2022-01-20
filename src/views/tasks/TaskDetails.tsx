import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GetOneTask } from '@api/queries/taskQueries';
import { getTaskByID } from '@api/types/getTaskByID';

function TaskDetails(): JSX.Element {
  const { id }: { id: string } = useParams();

  const { loading, error, data } = useQuery<getTaskByID>(GetOneTask, {
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
        </div>
      )}
    </>
  );
}
export default TaskDetails;
