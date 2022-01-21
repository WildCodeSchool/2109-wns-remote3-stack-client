import { useMutation } from '@apollo/client';
import React, { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import close from '@assets/icons/close.svg';
import { toast } from 'react-toastify';
import { CREATE_TAG } from '../../API/mutation/createTag';
import SelectInput from '../../components/formInput/SelectInput';
import TextInput from '../../components/formInput/TextInput';

interface IProps {
  onTagCreated: (p: ITagList) => void;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

function CreateUpdateTag({ onTagCreated, setIsModal }: IProps): JSX.Element {
  const { handleSubmit, register } = useForm();

  // CREATE A NEW TAG
  const [create, { loading, error }] = useMutation<{
    createTag: ITagList;
  }>(CREATE_TAG, {
    onCompleted: (p: { createTag: ITagList }) => {
      toast('New tag successfully created');
      // ON SUCCESS WE CALL THE TAG CREATED FUNCTION FROM THE PARENT
      onTagCreated(p.createTag);
      setIsModal(false);
    },
  });
  const color = ['red', 'yellow', 'green', 'blue', 'purple'];

  const onSubmit: SubmitHandler<ITagPayload> = (data: ITagPayload) => {
    const tagData = {
      payload: {
        label: data.label,
        color: data.color,
      },
    };
    create({ variables: tagData });
  };

  if (loading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <div>
      <div className="flex items-center">
        <h2 className="text-lg">Create a new tag</h2>
        <button
          onClick={() => setIsModal(false)}
          type="button"
          className="mt-2 "
        >
          <img className="h-3 ml-2 w-3" src={close} alt="" />
        </button>
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
