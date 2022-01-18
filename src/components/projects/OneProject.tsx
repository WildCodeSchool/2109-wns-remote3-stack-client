import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  item: IProjectList;
  isForm: boolean;
}

function OneProject({ item, isForm }: IProps): JSX.Element {
  return (
    <Link to={`/project/:${item.id}`}>
      <button
        type="button"
        className="w-full bg-darkGray border border-lightGray transform hover:border-lightPurple  hover:bg-transparent duration-500 rounded-md my-5 lg:my-3 p-2 lg:p-5 flex flex-col lg:flex-row lg:items-end  lg:justify-between"
        key={item.id}
      >
        <div className="flex flex-col items-start">
          <p className="text-xl">Name: {item.name}</p>
          <div
            className={`flex flex-col lg:flex-row items-start mt-2 ${
              isForm ? 'text-xs' : 'text-sm'
            } `}
          >
            <p className="my-1 lg:mr-4 text-left">
              Start Date:
              <br /> {item.startDate}
            </p>
            <p className="my-1 lg:mx-4 text-left">
              End Date: <br /> {item.endDate}
            </p>
            <p className=" my-1 lg:ml-4 text-left">
              Estimee spent time: <br /> {item.estimeeSpentTime}
            </p>
          </div>
        </div>
        <p className="mt-2">Status: {item.status}</p>
      </button>
    </Link>
  );
}

export default OneProject;
