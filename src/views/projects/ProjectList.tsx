import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import * as queries from '@api/queries/projectQueries';
import HeaderList from '@components/navigation/HeaderList';
import OneProject from '@components/projects/OneProject';
import CreateUpdateProject from './CreateUpdateProject';

interface IResponse {
  getAllProjects: IProjectList[];
}

function ProjectList(): JSX.Element {
  const [data, setData] = useState<IProjectList[]>([]);
  const [isForm, setIsForm] = useState(false);
  // FETCH THE PROJECT LIST
  const { loading, error } = useQuery<IResponse>(queries.GetAllProjects, {
    onCompleted: (d) => {
      setData(d.getAllProjects);
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
      <HeaderList name="Projects List" setIsForm={setIsForm} />
      <div className={`${isForm && 'flex'}`}>
        {isForm && (
          <CreateUpdateProject setIsForm={setIsForm} isForm={isForm} />
        )}
        <div
          className={`${
            isForm ? 'hidden lg:flex lg:flex-col lg:w-6/12 pl-5' : 'mt-2'
          }`}
        >
          {data.map((item) => {
            return <OneProject isForm={isForm} item={item} />;
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

export default ProjectList;
