import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import * as queries from '../../common/projectQueries';
import HeaderList from '../../components/navigation/HeaderList';
import OneProject from '../../components/projects/OneProject';
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
      <HeaderList setIsForm={setIsForm} />
      <div className={`${isForm && 'flex'}`}>
        {isForm && (
          <CreateUpdateProject setIsForm={setIsForm} isForm={isForm} />
        )}
        <div
          className={`mt-2 ${
            isForm && 'hidden lg:flex lg:flex-col lg:w-6/12 pl-5'
          }`}
        >
          {data.map((item) => {
            return <OneProject isForm={isForm} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
