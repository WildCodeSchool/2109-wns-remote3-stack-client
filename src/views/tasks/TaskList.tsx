import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import HeaderList from '../../components/navigation/HeaderList';
import * as queries from '../../API/queries/taskQueries';
import OneTask from '../../components/tasks/OneTask';
import CreateUpdateTask from './CreateUpdateTask';

interface IResponse {
  getAllTasks: ITaskList[];
}

function TaskList(): JSX.Element {
  const [data, setData] = useState<ITaskList[]>([]);
  const [isForm, setIsForm] = useState(false);
  // FETCH THE TASK LIST
  const { loading, error } = useQuery<IResponse>(queries.GET_ALL_TASKS, {
    onCompleted: (d) => {
      setData(d.getAllTasks);
    },
  });

  // ON CREATED TASK ! ADD THE CREATED TASK TO THE ARRAY
  const onTaskCreated = (p: ITaskList) => {
    setData([...data, p]);
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
      <HeaderList setIsForm={setIsForm} name="Tasks list" />
      {isForm && <p>form</p>}
      <div className={`${isForm && 'flex'}`}>
        {isForm && (
          <CreateUpdateTask
            setIsForm={setIsForm}
            isForm={isForm}
            onTaskCreated={onTaskCreated}
          />
        )}
        <div
          className={`${
            isForm ? 'hidden lg:flex lg:flex-col lg:w-6/12 pl-5' : 'mt-2'
          }`}
        >
          {reverseData.map((item) => {
            return <OneTask isForm={isForm} item={item} />;
          })}
          {data.length === 0 && (
            <p className="font-normal lg:py-5 py-2 text-purple">
              There is no projects for now
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
