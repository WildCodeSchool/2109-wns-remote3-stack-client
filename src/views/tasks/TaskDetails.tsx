import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import * as queries from '../../API/queries/taskQueries';

function TaskDetails({
  match,
}: RouteComponentProps<{ id?: string }>): JSX.Element {
  const idTask = match.params.id;

  const { loading, error, data } = useQuery<ITask>(queries.GetOneTask, {
    variables: { getTaskByIdId: idTask },
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
