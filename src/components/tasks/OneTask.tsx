import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectById_getProjectByID_tasks } from '../../API/types/getProjectById';

interface IProps {
  item: getProjectById_getProjectByID_tasks;
}

function OneTask({ item }: IProps): JSX.Element {
  return (
    <Link to={`/task/${item.id}`}>
      <button
        type="button"
        className="w-full bg-darkGray border border-lightGray transform hover:border-lightPurple  hover:bg-transparent duration-500 rounded-md my-5 lg:my-3 p-2 lg:p-5 flex flex-col lg:flex-row lg:items-end  lg:justify-between"
        key={item.id}
      >
        <div className="flex flex-col items-start">
          <h2 className="text-xl">{item.subject}</h2>
          <p className="text-sm">{item.projectId}</p>
          <div className="flex">
            <p className="my-1 lg:mr-4 text-left">
              Start Date:
              <br /> {new Date(item.startDate).toLocaleDateString()}
            </p>
            <p className="my-1 lg:mx-4 text-left">
              End Date: <br /> {new Date(item.endDate).toLocaleDateString()}
            </p>
          </div>
          <p className=" my-1 lg:ml-4 text-left">
            Estimee spent time: {item.estimeeSpentTime}
          </p>
          <div className="flex">
            {item.tags.map((tag) => {
              return (
                <div key={tag.label}>
                  <p
                    className={`text-xs mr-2 rounded-full px-2 bg-${tag.color}-400`}
                  >
                    {tag.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-2 text-xs rounded-full border px-6">
          {item.advancement}
        </p>
      </button>
    </Link>
  );
}

export default OneTask;
