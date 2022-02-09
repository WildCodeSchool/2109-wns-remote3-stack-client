import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getTaskByID } from '@api/types/getTaskByID';
import CreateUpdateTask from '@views/tasks/CreateUpdateTask';
import { GET_ONE_TASK } from '../../API/queries/taskQueries';
import { GET_ONE_PROJECT } from '../../API/queries/projectQueries';
import TaskInformation from '../../components/tasks/TaskInformation';
import { getProjectById } from '../../API/types/getProjectById';

function TaskDetails(): JSX.Element {
  const { id }: { id: string } = useParams();
  const [isModal, setIsModal] = useState(false);
  const {
    loading: loadingTask,
    error: errorTask,
    data: dataTask,
  } = useQuery<getTaskByID>(GET_ONE_TASK, {
    variables: { taskId: id },
  });
  const {
    loading: loadingProject,
    error: errorProject,
    data: dataProject,
  } = useQuery<getProjectById>(GET_ONE_PROJECT, {
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
        <div className="lg:flex flex-col justify-between mx-5 my-8">
          <div className="lg:flex lg:flex-row flex flex-col-reverse">
            <div className="lg:w-1/2 mt-7 lg:mt-0  lg:mr-10">
              <div className="flex items-center ">
                <h2 className="text-2xl text-lightPurple">
                  {dataProject?.getProjectByID.name}
                </h2>
                <h1 className="ml-2">/ {dataTask.getTaskByID.subject}</h1>
              </div>
              <p className="mt-5 font-thin text-sm leading-6 pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                temporibus provident mollitia officiis maiores, animi dicta
                dolores libero harum quod. Quas officiis impedit sed
                consequuntur ducimus dignissimos deleniti aliquam laudantium.
              </p>
            </div>
            <TaskInformation setIsModal={setIsModal} data={dataTask} />
            {isModal && (
              <CreateUpdateTask taskId={id} setIsModal={setIsModal} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default TaskDetails;
