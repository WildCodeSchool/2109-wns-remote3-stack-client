import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import HeaderList from '@components/navigation/HeaderList';
import OneProject from '@components/projects/OneProject';
import { GET_ALL_PROJECTS } from '../../API/queries/projectQueries';
import CreateUpdateProject from './CreateUpdateProject';

interface IResponse {
  getAllProjects: IProjectList[];
}

function ProjectList(): JSX.Element {
  const [data, setData] = useState<IProjectList[]>([]);
  const [isModal, setIsModal] = useState(false);
  // FETCH THE PROJECT LIST
  const { loading, error } = useQuery<IResponse>(GET_ALL_PROJECTS, {
    onCompleted: (d) => {
      setData(d.getAllProjects);
    },
  });

  // REVERSE THE ARRAY THE RENDER THE YOUNGER ONE IN FIRST
  const reverseData = [...data].reverse();

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="pb-5 lg:py-0">
      <HeaderList name="Projects List" setIsModal={setIsModal} />

      {isModal && (
        <CreateUpdateProject projectId={undefined} setIsModal={setIsModal} />
      )}
      <div className="mt-2 px-3 lg:pr-6">
        {reverseData.map((item) => {
          return (
            <div key={item.id}>
              <OneProject item={item} />
            </div>
          );
        })}
        {data.length === 0 && (
          <p className="font-normal lg:py-2 py-2 text-purple">
            There is no projects for now
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
