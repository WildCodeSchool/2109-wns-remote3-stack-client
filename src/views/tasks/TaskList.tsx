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
  // FETCH THE PROJECT LIST
  const { loading, error } = useQuery<IResponse>(queries.GetAllTasks, {
    onCompleted: (d) => {
      setData(d.getAllTasks);
    },
  });

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <div className="py-5 lg:py-0">
      <HeaderList setIsModal={setIsForm} name="Tasks list" />
      {isForm && <p>form</p>}
      <div className={`${isForm && 'flex'}`}>
        {isForm && <CreateUpdateTask setIsForm={setIsForm} isForm={isForm} />}
        <div
          className={`${
            isForm ? 'hidden lg:flex lg:flex-col lg:w-6/12 pl-5' : 'mt-2'
          }`}
        >
          {data.map((item) => {
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
