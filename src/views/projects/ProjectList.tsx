import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import HeaderList from '@components/navigation/HeaderList';
import OneProject from '@components/projects/OneProject';
import { GetAllProjects } from '@api/types/GetAllProjects';
import { GET_ALL_PROJECTS } from '@api/queries/projectQueries';
import CreateUpdateProject from './CreateUpdateProject';

function ProjectList(): JSX.Element {
  const [isModal, setIsModal] = useState(false);
  // FETCH THE PROJECT LIST
  const { loading, error, data } = useQuery<GetAllProjects>(GET_ALL_PROJECTS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }

  return (
    <div className="pb-5 lg:py-0">
      <HeaderList name="Projects List" setIsModal={setIsModal} />

      {isModal && (
        <CreateUpdateProject projectId={undefined} setIsModal={setIsModal} />
      )}
      <div className="mt-2 px-3 lg:pr-6">
        {data.getAllProjects.map((item) => {
          return (
            <div key={item.id}>
              <OneProject item={item} />
            </div>
          );
        })}
        {data.getAllProjects.length === 0 && (
          <p className="font-normal lg:py-2 py-2 text-purple">
            There is no projects for now
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
