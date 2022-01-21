import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import HeaderList from '@components/navigation/HeaderList';
import * as queries from '@api/queries/taskQueries';
import OneTask from '@components/tasks/OneTask';
import { GetAllTasks_getAllTasks } from '@api/types/GetAllTasks';
import CreateUpdateTask from './CreateUpdateTask';

interface IResponse {
  getAllTasks: GetAllTasks_getAllTasks[];
}

function TaskList(): JSX.Element {
  const [data, setData] = useState<GetAllTasks_getAllTasks[]>([]);
  const [isModal, setIsModal] = useState(false);
  // FETCH THE TASK LIST
  const { loading, error } = useQuery<IResponse>(queries.GET_ALL_TASKS, {
    onCompleted: (d) => {
      setData(d.getAllTasks);
    },
  });

  // ON CREATED TASK ! ADD THE CREATED TASK TO THE ARRAY
  const onTaskCreated = (p: GetAllTasks_getAllTasks) => {
    setData([...data, p]);
    window.location.reload();
  };

  // REVERSE THE ARRAY THE RENDER THE YOUNGER ONE IN FIRST
  const reverseData = [...data].reverse();

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <div className="py-5 lg:py-0 lg:pt-28">
      <HeaderList setIsModal={setIsModal} name="Tasks list" />
      {isModal && (
        <CreateUpdateTask
          taskId={undefined}
          setIsModal={setIsModal}
          onTaskCreated={onTaskCreated}
        />
      )}
      <div className="mt-2 px-3 lg:pr-6">
        {reverseData.map((item) => {
          return (
            <div key={item.id}>
              <OneTask item={item} />
            </div>
          );
        })}
        {data.length === 0 && (
          <p className="font-normal lg:py-5 py-2 text-purple">
            There is no taks for now
          </p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
