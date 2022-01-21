import { GetAllProjects_getAllProjects } from '@api/types/GetAllProjects';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  item: GetAllProjects_getAllProjects;
}

function OneProject({ item }: IProps): JSX.Element {
  return (
    <Link to={`/project/${item.id}`}>
      <button
        type="button"
        className="w-full bg-darkGray border border-lightGray transform hover:border-lightPurple  hover:bg-transparent duration-500 rounded-md my-3  p-3  mx-1 lg:p-3 flex flex-col lg:flex-row lg:items-end  lg:justify-between"
      >
        <div className="flex flex-col items-start w-full">
          <p className="text-lg">Name: {item.name}</p>
          <div className="flex flex-col lg:flex-row items-start mt-2">
            <p className="my-1 lg:mr-4 text-left">
              Start Date: {new Date(item.startDate).toLocaleDateString()}
            </p>
            <p className="my-1 lg:mx-4 text-left">
              End Date: {new Date(item.endDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex  lg:items-center w-full mt-5 lg:mt-2 justify-between">
            <p className="text-left text-sm">
              Estimee spent time: {item.estimeeSpentTime}
            </p>
            <p className="text-left text-sm ">{item.status}</p>
          </div>
        </div>
      </button>
    </Link>
  );
}

export default OneProject;
