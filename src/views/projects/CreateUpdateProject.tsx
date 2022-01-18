import { useMutation } from '@apollo/client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { CREATE_PROJECT } from '../../API/mutation/createProject';
import close from '../../assets/icons/close.svg';
import DateInput from '../../components/formInput/DateInput';
import NumberInput from '../../components/formInput/NumberInput';
import SelectInput from '../../components/formInput/SelectInput';
import TextArea from '../../components/formInput/TextArea';
import TextInput from '../../components/formInput/TextInput';

interface IProps {
  isForm: boolean;
  setIsForm: Dispatch<SetStateAction<boolean>>;
  onProjectCreated: (p: IProjectList) => void;
}

function CreateUpdateProject({
  isForm,
  setIsForm,
  onProjectCreated,
}: IProps): JSX.Element {
  const { handleSubmit, register } = useForm();
  const [dateError, setDateError] = useState('');
  const [create, { loading, error }] = useMutation<{
    createProject: IProjectList;
  }>(CREATE_PROJECT, {
    onCompleted: (p: { createProject: IProjectList }) => {
      toast('New project successfully created');
      onProjectCreated(p.createProject);
    },
  });

  const onSubmit: SubmitHandler<IProjectPayload> = (data: IProjectPayload) => {
    const date1 = new Date(data.startDate);
    const date2 = new Date(data.endDate);

    if (date1 > date2) {
      setDateError(`You can't choose a EndDate older than the startDate`);
    } else {
      const projectData = {
        name: data.name,
        description: data.description,
        status: data.status,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        estimeeSpentTime: parseInt(data.estimeeSpentTime, 10),
      };
      create({ variables: projectData });
    }
  };

  const projectStatus = ['TO_DO', 'IN_PROGRESS', 'BLOCKED', 'DONE'];

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
        <h2 className="text-lg">Create a new project</h2>
        <button onClick={() => setIsForm(false)} type="button" className="mt-2">
          <img className="h-5 w-5" src={close} alt="" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} action="create/Update project">
        <TextInput
          label="Name"
          placeholder="project name"
          register={register}
          name="name"
          required
          id="name"
          error=""
        />
        <TextArea
          label="Description"
          placeholder="project description"
          register={register}
          name="description"
          required
          id="description"
          error=""
        />
        <SelectInput
          label="Select project status"
          data={projectStatus}
          name="status"
          id="status"
          register={register}
          required
        />
        <div className="flex flex-wrap">
          <div className="lg:w-3/12 mr-5">
            <DateInput
              label="Start date"
              id="startdate"
              register={register}
              name="startDate"
              required
            />
          </div>
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
        {dateError !== '' && (
          <p className="text-xs text-red-500 mt-3">{dateError}</p>
        )}
        <button
          type="submit"
          className="mt-8 bg-purple rounded-sm w-full text-white px-5 py-2"
        >
          Create project
        </button>
      </form>
    </div>
  );
}

export default CreateUpdateProject;
