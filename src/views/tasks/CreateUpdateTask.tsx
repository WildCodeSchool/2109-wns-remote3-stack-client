import { useMutation, useQuery } from '@apollo/client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import OneTag from '@components/tag/OnTag';
import close from '@assets/icons/close.svg';
import { format } from 'date-fns';
import {
  CREATE_TASK_WITH_TAGS,
  UPDATE_TASK,
} from '../../API/mutation/createTask';
import { GET_ALL_PROJECTS } from '../../API/queries/projectQueries';
import DateInput from '../../components/formInput/DateInput';
import NumberInput from '../../components/formInput/NumberInput';
import SelectInput from '../../components/formInput/SelectInput';
import TextInput from '../../components/formInput/TextInput';
import SelectInputProjectId from '../../components/formInput/SelectInputProjectId';
import { GET_ALL_TAGS } from '../../API/queries/tagQueries';
import CreateUpdateTag from '../tags/CreateUpdateTag';
import { GET_ONE_TASK } from '../../API/queries/taskQueries';

interface IProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  taskId: string | undefined;
  onTaskCreated: (p: ITaskList) => void;
}
interface IResponseProjects {
  getAllProjects: IProjectList[];
}
interface IResponseTags {
  getAllTags: ITagList[];
}

function CreateUpdateTask({
  setIsModal,
  onTaskCreated,
  taskId,
}: IProps): JSX.Element {
  const { handleSubmit, register, setValue } = useForm();
  const [dataProjects, setDataProjects] = useState<IProjectList[]>([]);
  const [dataTagsList, setDataTagsList] = useState<ITagList[]>([]);
  const [isModalTag, setIsModalTag] = useState(false);
  const [dataTag, setDataTag] = useState<ITagList[]>([]);

  // CREATE A TASK
  const [create, { loading, error }] = useMutation<{
    createTask: ITaskList;
  }>(CREATE_TASK_WITH_TAGS, {
    onCompleted: (p: { createTask: ITaskList }) => {
      toast('New task successfully created');
      // ON SUCCESS WE CALL THE TASK CREATED FUNCTION FROM THE PARENT
      onTaskCreated(p.createTask);
    },
  });

  // UPDATE A TASK
  const [update, { loading: updateLoading, error: updateError }] = useMutation<{
    createTask: ITaskList;
  }>(UPDATE_TASK, {
    onCompleted: () => {
      setIsModal(false);
    },
  });

  // ON UPDATE GET THE TASKS'S DATA
  const { loading: isLoading, error: isError } = useQuery<ITask>(GET_ONE_TASK, {
    skip: !taskId,
    // ON SUCCES SET THE DEFAULT VALUE TO THE FORM'S INPUTS
    onCompleted: (d: ITask) => {
      setValue('subject', d.getTaskByID.subject);
      setValue('advancement', d.getTaskByID.advancement);
      setValue('estimeeSpentTime', d.getTaskByID.estimeeSpentTime);
      setValue('taskId', d.getTaskByID.id);
      setValue('tags', d.getTaskByID.tags);
      setValue(
        'endDate',
        format(new Date(d.getTaskByID.endDate), 'yyyy-MM-dd')
      );
    },
    variables: { idTask: taskId },
  });

  // FETCH THE PROJECT LIST
  useQuery<IResponseProjects>(GET_ALL_PROJECTS, {
    onCompleted: (d) => {
      setDataProjects(d.getAllProjects);
    },
  });

  // FETCH THE TAGS LIST
  useQuery<IResponseTags>(GET_ALL_TAGS, {
    onCompleted: (d) => {
      setDataTagsList(d.getAllTags);
    },
  });

  // REVERSE THE ARRAY THE RENDER THE YOUNGER ONE IN FIRST
  const reverseData = [...dataTagsList].reverse();

  const onTagCreated = () => {
    setDataTagsList(dataTagsList);
  };

  const onSubmit: SubmitHandler<ITaskPayload> = (data: ITaskPayload) => {
    const date = new Date(data.endDate);
    const taskData = {
      subject: data.subject,
      projectId: data.projectId,
      tags: dataTag,
      advancement: data.advancement,
      endDate: date,
      estimeeSpentTime: parseInt(data.estimeeSpentTime, 10),
    };
    // IF TASK ID IS DEFINE WE UPDATE ESLE WE CREATE
    if (taskId === undefined) {
      create({ variables: taskData });
    } else {
      update({ variables: { ...taskData, updateTaskId: taskId } });
    }
  };
  const taskAdvancement = ['TO_DO', 'IN_PROGRESS', 'BLOCKED', 'DONE'];

  if (loading || updateLoading || isLoading) {
    return <p>...loading</p>;
  }
  if (error || isError || updateError) {
    toast('Oops something bad happen');
  }
  return (
    <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center ">
      {isModalTag && (
        <div className="w-screen inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center">
          <CreateUpdateTag
            onTagCreated={onTagCreated}
            setIsModal={setIsModalTag}
          />
        </div>
      )}
      {isModalTag === false && (
        <div className="p-7 lg:pr-8 bg-darkBlue h-full lg:h-modal rounded-md shadow-2xl  lg:w-5/12 lg:overflow-y-scroll">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-lg">
              {taskId === undefined ? 'Create a new task' : 'update task'}
            </h2>
            <button
              onClick={() => setIsModal(false)}
              type="button"
              className="mt-2"
            >
              <img className="h-5 w-5" src={close} alt="" />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} action="create/Update task">
            <SelectInputProjectId
              label="Select project"
              data={dataProjects}
              name="projectId"
              id="projectId"
              register={register}
              required
            />
            <TextInput
              label="Subject"
              placeholder="subject"
              register={register}
              name="subject"
              required
              id="subject"
              error=""
            />
            <SelectInput
              label="Select task advancement"
              data={taskAdvancement}
              name="advancement"
              id="advancement"
              register={register}
              required
            />
            <div className="mt-2 flex flex-wrap px-3 lg:pr-6">
              {reverseData.map(({ __typename, ...item }) => {
                return (
                  <div
                    tabIndex={0}
                    key={item.id}
                    role="button"
                    onKeyPress={undefined}
                    onClick={() => setDataTag([...dataTag, item])}
                  >
                    <OneTag item={item} />
                  </div>
                );
              })}
            </div>
            <button type="button" onClick={() => setIsModalTag(true)}>
              Create a new tag
            </button>
            <div className="flex flex-wrap">
              <div className="lg:w-3/12 mr-5">
                <DateInput
                  label="End date"
                  id="enddate"
                  register={register}
                  name="endDate"
                  required
                />
              </div>
              <div className="lg:w-4/12 w-full">
                <NumberInput
                  label="Estimee spent time"
                  placeholder="hours"
                  register={register}
                  name="estimeeSpentTime"
                  required
                  id="estimeeSpentTime"
                  error=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 bg-purple rounded-sm w-full text-white px-5 py-2"
            >
              {taskId === undefined ? 'Create a new task' : 'update task'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateUpdateTask;
