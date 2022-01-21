import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ProjectTask from '@components/projects/ProjectTask';
import ProjectInformations from '@components/projects/ProjectInformations';
import ProjectUser from '@components/projects/ProjectUser';
import NavMobile from '@components/projects/NavMobile';
import { GET_ONE_PROJECT } from '@api/queries/projectQueries';
import { getProjectById } from '@api/types/getProjectById';
import CreateUpdateProject from './CreateUpdateProject';

function ProjectDetails(): JSX.Element {
  const { id }: { id: string } = useParams();
  const [navLink, setNavLink] = useState('task');
  const [isModal, setIsModal] = useState(false);
  const { loading, error, data } = useQuery<getProjectById>(GET_ONE_PROJECT, {
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
        <div className="lg:flex flex-col justify-between mx-5 my-8">
          <div className="lg:flex lg:flex-row flex flex-col-reverse">
            <div className="lg:w-1/2 mt-7 lg:mt-0  lg:mr-10">
              <h1 className="text-xl text-lightPurple border-b border-lightPurple pb-2 w-full">
                Name: {data.getProjectByID.name}
              </h1>
              <p className="mt-5 font-thin text-sm leading-6 pr-5">
                {data.getProjectByID.description}
              </p>
            </div>
            <ProjectInformations setIsModal={setIsModal} data={data} />
            {isModal && (
              <CreateUpdateProject projectId={id} setIsModal={setIsModal} />
            )}
          </div>
          <NavMobile setNavLink={setNavLink} navLink={navLink} />
          <div className="flex flex-col lg:hidden mb-10">
            {navLink === 'task' && <ProjectTask data={data} />}
            {navLink === 'users' && <ProjectUser data={data} />}
          </div>
          <div className="hidden lg:flex mt-7">
            <ProjectTask data={data} />
            <ProjectUser data={data} />
          </div>
        </div>
      )}
    </>
  );
}
export default ProjectDetails;
