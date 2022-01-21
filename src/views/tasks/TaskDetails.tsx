import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import DeleteTask from '@components/tasks/DeleteTask';
import * as queries from '../../API/queries/taskQueries';
import CreateUpdateTask from './CreateUpdateTask';
import { GET_ONE_PROJECT } from '../../API/queries/projectQueries';

function TaskDetails(): JSX.Element {
  const [isModal, setIsModal] = useState(false);
  const { id }: { id: string } = useParams();

  const {
    loading: loadingTask,
    error: errorTask,
    data: dataTask,
  } = useQuery<ITask>(queries.GET_ONE_TASK, {
    variables: { taskId: id },
  });

  const {
    loading: loadingProject,
    error: errorProject,
    data: dataProject,
  } = useQuery<IProject>(GET_ONE_PROJECT, {
    variables: {
      getProjectByIdId: dataTask ? dataTask.getTaskByID.projectId : '',
    },
  });

  if (loadingTask || loadingProject) {
    return <p>...loading</p>;
  }
  if (errorTask || errorProject) {
    return <p>erreur</p>;
  }
  return (
    <>
      {dataTask && (
        <div>
          <div className="lg:flex items-center justify-between mt-9">
            <div className="lg:flex w-1/2 border-b border-lightPurple items-center pb-2 justify-between mt-9">
              <div className="flex items-center ">
                <h2 className="text-2xl text-lightPurple">
                  {dataProject?.getProjectByID.name}
                </h2>
                <h1 className="ml-2">/ {dataTask.getTaskByID.subject}</h1>
              </div>
              <div className="flex">
                {dataTask.getTaskByID.tags.map((tag) => {
                  return (
                    <div key={tag.id}>
                      <p
                        className={`text-xs mr-2 rounded-sm px-2 bg-${tag.color}-400`}
                      >
                        {tag.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {isModal && (
            <CreateUpdateTask
              taskId={dataTask.getTaskByID.id}
              setIsModal={setIsModal}
              onTaskCreated={() => console.log('error')}
            />
          )}
          <button
            onClick={() => setIsModal(true)}
            type="button"
            className="text-left text-sm underline mt-5"
          >
            {` Update project's informations`}
          </button>
          <DeleteTask item={dataTask} />
        </div>
      )}
      <div>
        <p>Status:</p>
        <p>{dataTask.getTaskByID.advancement}</p>
      </div>
    </>
  );
}
export default TaskDetails;
