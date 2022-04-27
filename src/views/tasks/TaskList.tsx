import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import HeaderList from '@components/navigation/HeaderList';
import OneTask from '@components/tasks/OneTask';
import { GetAllTasks_getAllTasks } from '@api/types/GetAllTasks';
import { GET_ALL_TASKS } from '@api/queries/taskQueries';
import CreateUpdateTask from './CreateUpdateTask';

interface IResponse {
  getAllTasks: GetAllTasks_getAllTasks[];
}

function TaskList(): JSX.Element {
  const [isModal, setIsModal] = useState(false);
  // FETCH THE TASK LIST
  const { loading, error, data } = useQuery<IResponse>(GET_ALL_TASKS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }
  return (
    <div className="py-5 lg:py-0 lg:pt-28">
      <HeaderList setIsModal={setIsModal} name="Tasks list" />
      {isModal && (
        <CreateUpdateTask taskId={undefined} setIsModal={setIsModal} />
      )}
      <div className="mt-2 px-3 lg:pr-6">
        {[...data?.getAllTasks].reverse().map((item) => {
          return (
            <div key={item.id}>
              <OneTask item={item} />
            </div>
          );
        })}
        {[...data?.getAllTasks].reverse().length === 0 && (
          <p className="font-normal lg:py-5 py-2 text-purple">
            There is no taks for now
          </p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
