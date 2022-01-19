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
  const [isForm, setIsForm] = useState(false);
  // FETCH THE PROJECT LIST
  const { loading, error } = useQuery<IResponse>(GET_ALL_PROJECTS, {
    onCompleted: (d) => {
      setData(d.getAllProjects);
    },
  });

  // ON CREATED PROJECT ! ADD THE CREATED PROJECT TO THE ARRAY
  const onProjectCreated = (p: IProjectList) => {
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
    <div className="pb-5 lg:py-0 lg:pt-28">
      <HeaderList name="Projects List" setIsForm={setIsForm} />
      <div className={`${isForm && 'flex'}`}>
        {isForm && (
          <CreateUpdateProject
            onProjectCreated={onProjectCreated}
            setIsForm={setIsForm}
            isForm={isForm}
          />
        )}
        <div
          className={`${
            isForm
              ? 'hidden lg:flex lg:flex-col lg:w-6/12  px-5 mt-3 h-full overflow-y-scroll'
              : 'mt-2 px-3 lg:px-5'
          }`}
        >
          {reverseData.map((item) => {
            return (
              <div key={item.id}>
                <OneProject isForm={isForm} item={item} />
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
    </div>
  );
}

export default ProjectList;
