import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { CREATE_TAG } from '../../API/mutation/createTag';
import SelectInput from '../../components/formInput/SelectInput';
import TextInput from '../../components/formInput/TextInput';

interface IProps {
  onTagCreated: (p: ITagList) => void;
}

function CreateUpdateTag({ onTagCreated }: IProps): JSX.Element {
  const { handleSubmit, register } = useForm();
  const [isModal, setIsModal] = useState('block');

  // CREATE A NEW TAG
  const [create, { loading, error }] = useMutation<{
    createTag: ITagList;
  }>(CREATE_TAG, {
    onCompleted: (p: { createTag: ITagList }) => {
      toast('New tag successfully created');
      // ON SUCCESS WE CALL THE TAG CREATED FUNCTION FROM THE PARENT
      onTagCreated(p.createTag);
    },
  });
  const color = ['red', 'yellow', 'green', 'blue', 'purple'];

  const onSubmit: SubmitHandler<ITagPayload> = (data: ITagPayload) => {
    const tagData = {
      label: data.label,
      color: data.color,
    };
    create({ variables: tagData });
    setIsModal('hidden');
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <div className={`${isModal}`}>
      <div className="flex w-full justify-between items-center">
        <h2 className="text-lg">Create a new tag</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} action="create/Update tag">
        <TextInput
          label="label"
          placeholder="label"
          register={register}
          name="label"
          required
          id="label"
          error=""
        />
        <SelectInput
          label="Select color"
          data={color}
          name="color"
          id="color"
          register={register}
          required
        />
        <button
          type="submit"
          className="mt-8 bg-purple rounded-sm w-full text-white px-5 py-2"
        >
          Create tag
        </button>
      </form>
    </div>
  );
}

export default CreateUpdateTag;
