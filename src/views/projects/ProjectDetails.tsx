import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import * as queries from '../../API/queries/projectQueries';
import ProjectOwner from '../../components/projects/ProjectOwner';
import OneTask from '../../components/tasks/OneTask';

function ProjectDetails(): JSX.Element {
  const { id }: { id: string } = useParams();
  const { loading, error, data } = useQuery<IProject>(queries.GetOneProject, {
    variables: { getProjectByIdId: id },
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
        <div className="lg:flex lg:flex-row-reverse justify-between mt-9">
          <div className="lg:w-1/2">
            <ProjectOwner />
          </div>
          <div className="lg:w-1/2">
            <h1
              style={{ borderBottom: '2px solid #8790E0' }}
              className="text-xl text-lightPurple border-2 border-transparent pb-2 w-full"
            >
              Project {data.getProjectByID.name}
            </h1>
            <p className="mt-5">{data.getProjectByID.description}</p>
            <h2
              style={{ borderBottom: '2px solid #8790E0' }}
              className="text-xl text-lightPurple border-2 border-transparent mt-14 pb-2 w-full"
            >
              Project Tasks
            </h2>
            {data.getProjectByID.tasks.map((item) => {
              return <OneTask isForm={false} item={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
export default ProjectDetails;
