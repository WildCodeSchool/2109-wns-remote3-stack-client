import { useMutation, useQuery } from '@apollo/client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import close from '@assets/icons/close.svg';
import { useHistory } from 'react-router-dom';
import { GetOneProject, UPDATE_PROJECT } from '@api/queries/projectQueries';
import { format } from 'date-fns';
import { CREATE_PROJECT } from '../../API/mutation/createProject';
import DateInput from '../../components/formInput/DateInput';
import NumberInput from '../../components/formInput/NumberInput';
import SelectInput from '../../components/formInput/SelectInput';
import TextArea from '../../components/formInput/TextArea';
import TextInput from '../../components/formInput/TextInput';

interface IProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  projectId: string | undefined;
}

function CreateUpdateProject({ setIsModal, projectId }: IProps): JSX.Element {
  const { handleSubmit, register, setValue } = useForm();
  const router = useHistory();
  const [dateError, setDateError] = useState('');

  // CREATE A NEW PROJECT
  const [create, { loading: createLoading, error: createError }] = useMutation<{
    createProject: IProjectList;
  }>(CREATE_PROJECT, {
    onCompleted: (d: { createProject: IProjectList }) => {
      router.push(`/project/${d.createProject.id}`);
      toast('New project successfully created');
    },
  });

  // UPDATE A PROJECT
  const [update, { loading: updateLoading, error: updateError }] = useMutation<{
    createProject: IProjectList;
  }>(UPDATE_PROJECT, {
    onCompleted: () => {
      setIsModal(false);
    },
  });

  // ON UPDATE GET THE PROJECT'S DATA
  const { loading: isLoading, error: isError } = useQuery<IProject>(
    GetOneProject,
    {
      skip: !projectId,
      // ON SUCCES SET THE DEFAULT VALUE TO THE FORM'S INPUTS
      onCompleted: (d: IProject) => {
        setValue(
          'startDate',
          format(new Date(d.getProjectByID.startDate), 'yyyy-MM-dd')
        );
        setValue(
          'endDate',
          format(new Date(d.getProjectByID.endDate), 'yyyy-MM-dd')
        );
        setValue('name', d.getProjectByID.name);
        setValue('description', d.getProjectByID.description);
        setValue('status', d.getProjectByID.status);
        setValue('estimeeSpentTime', d.getProjectByID.estimeeSpentTime);
      },
      variables: { getProjectByIdId: projectId },
    }
  );

  const onSubmit: SubmitHandler<IProjectPayload> = (data: IProjectPayload) => {
    const date1 = new Date(data.startDate);
    const date2 = new Date(data.endDate);

    // COMPARE STARTDATE AND ENDDATE
    if (date1 > date2) {
      // IF THE USER SELECT A ENDDATE OLDER THAN THE STARTDATE RETURN A ERROR
      setDateError(`You can't choose a EndDate older than the startDate`);
    } else {
      const projectData = {
        name: data.name,
        description: data.description,
        status: data.status,
        startDate: date1,
        endDate: date2,
        estimeeSpentTime: parseInt(data.estimeeSpentTime, 10),
      };
      // IF PROJECT ID IS DEFINE WE UPDATE ESLE WE CREATE
      if (projectId === undefined) {
        create({ variables: projectData });
      } else {
        update({ variables: { ...projectData, updateProjectId: projectId } });
      }
    }
  };

  const projectStatus = ['TO_DO', 'IN_PROGRESS', 'BLOCKED', 'DONE'];

  if (createLoading || updateLoading || isLoading) {
    return <p>...loading</p>;
  }
  if (createError || isError || updateError) {
    toast('Oops something bad happen');
  }
  return (
    <div className="w-screen fixed inset-0 z-50 h-full  bg-darkGray bg-opacity-70 flex items-center justify-center ">
      <div className="p-7 lg:pr-8 bg-darkBlue h-full lg:h-modal rounded-md shadow-2xl  lg:w-5/12 lg:overflow-y-scroll">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-lg lg:text-2xl">
            {projectId === undefined ? 'Create a new project' : 'updateProject'}
          </h2>
          <button
            onClick={() => setIsModal(false)}
            type="button"
            className="mt-2"
          >
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
                id="startDate"
                name="startDate"
                register={register}
                required
              />
            </div>
            <div className="lg:w-3/12 mr-5">
              <DateInput
                label="End date"
                id="endDate"
                name="endDate"
                register={register}
                required
              />
            </div>
            <div className="lg:w-4/12 w-full">
              <NumberInput
                label="Estimee spent time"
                placeholder="hours"
                register={register}
                name="estimeeSpentTime"
                id="estimeeSpentTime"
                required
                error=""
              />
            </div>
          </div>
          {dateError !== '' && (
            <p className="text-xs text-red-500 mt-3">{dateError}</p>
          )}
          <button
            type="submit"
            className="mt-8 bg-purple rounded-md w-full text-white px-5 py-2"
          >
            {projectId === undefined
              ? 'Create a new project'
              : 'update my project'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUpdateProject;
