import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import * as queries from '../../API/queries/projectQueries';
import ProjectOwner from '../../components/projects/ProjectOwner';

function ProjectDetails({
  match,
}: RouteComponentProps<{ id?: string }>): JSX.Element {
  const idProject = match.params.id;

  const { loading, error, data } = useQuery<IProject>(queries.GetOneProject, {
    variables: { getProjectByIdId: idProject },
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
        <div className="lg:flex justify-between mt-9">
          <div className="lg:w-1/2">
            <h1
              style={{ borderBottom: '2px solid #8790E0' }}
              className="text-xl text-lightPurple border-2 border-transparent pb-2 w-full"
            >
              PROJECT {data.getProjectByID.name.toUpperCase()}
            </h1>
            <p className="mt-5">{data.getProjectByID.description}</p>
          </div>
          <div className="lg:w-1/2">
            <ProjectOwner />
          </div>
        </div>
      )}
    </>
  );
}
export default ProjectDetails;
