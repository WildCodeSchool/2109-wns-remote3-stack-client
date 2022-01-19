import { useMutation, useQuery } from '@apollo/client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import close from '@assets/icons/close.svg';
import { CREATE_TASK } from '../../API/mutation/createTask';
import { GET_ALL_PROJECTS } from '../../API/queries/projectQueries';
import DateInput from '../../components/formInput/DateInput';
import NumberInput from '../../components/formInput/NumberInput';
import SelectInput from '../../components/formInput/SelectInput';
import TextInput from '../../components/formInput/TextInput';
import SelectInputProjectId from '../../components/formInput/SelectInputProjectId';
import SelectInputTagId from '../../components/formInput/SelectInputTagId';
import { GET_ALL_TAGS } from '../../API/queries/tagQueries';
import CreateUpdateTag from '../tags/CreateUpdateTag';

interface IProps {
  isForm: boolean;
  setIsForm: Dispatch<SetStateAction<boolean>>;
  onTaskCreated: (p: ITaskList) => void;
}
interface IResponseProjects {
  getAllProjects: IProjectList[];
}
interface IResponseTags {
  getAllTags: ITagList[];
}
function CreateUpdateTask({
  isForm,
  setIsForm,
  onTaskCreated,
}: IProps): JSX.Element {
  const { handleSubmit, register } = useForm();
  const [dataProjects, setDataProjects] = useState<IProjectList[]>([]);
  const [dataTags, setDataTags] = useState<ITagList[]>([]);
  const [isModal, setIsModal] = useState(false);

  // CREATE A NEW TASK
  const [create, { loading, error }] = useMutation<{
    createTask: ITaskList;
  }>(CREATE_TASK, {
    onCompleted: (p: { createTask: ITaskList }) => {
      toast('New task successfully created');
      // ON SUCCESS WE CALL THE TASK CREATED FUNCTION FROM THE PARENT
      onTaskCreated(p.createTask);
    },
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
      setDataTags(d.getAllTags);
    },
  });

  const onTagCreated = () => {
    setDataTags(dataTags);
  };

  const onSubmit: SubmitHandler<ITaskPayload> = (data: ITaskPayload) => {
    const date2 = new Date(data.endDate);
    const taskData = {
      subject: data.subject,
      projectId: data.projectId,
      tagId: data.tagId,
      advancement: data.advancement,
      endDate: date2,
      estimeeSpentTime: parseInt(data.estimeeSpentTime, 10),
    };
    create({ variables: taskData });
  };
  const taskAdvancement = ['TO_DO', 'IN_PROGRESS', 'BLOCKED', 'DONE'];

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <div
      className={`py-5 px-4 w-0  min-h-full lg:pr-8 ${
        isForm && 'transform w-full lg:fixed right-0 lg:w-5/12 duration-500'
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg">Create a new task</h2>
        <button onClick={() => setIsForm(false)} type="button" className="mt-2">
          <img className="h-5 w-5" src={close} alt="" />
        </button>
      </div>

      {isModal && (
        <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center">
          <CreateUpdateTag
            onTagCreated={onTagCreated}
            setIsModal={setIsModal}
          />
        </div>
      )}

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
        <SelectInputTagId
          label="Select tag"
          data={dataTags}
          name="tagId"
          id="tagId"
          register={register}
          required
        />
        <button type="button" onClick={() => setIsModal(true)}>
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
          Create task
        </button>
      </form>
    </div>
  );
}

export default CreateUpdateTask;
