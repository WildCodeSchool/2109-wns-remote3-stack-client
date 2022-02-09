import React, { useState } from 'react';
import { GetAllTags_getAllTags } from '@api/types/GetAllTags';

interface IProps {
  item: GetAllTags_getAllTags;
}

function OneTag({ item }: IProps): JSX.Element {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <input
      onClick={toggleClass}
      value={item.label}
      type="button"
      className={
        isActive
          ? `cursor-pointer mr-2 hover:bg-opacity-200 bg-opacity-80 text-xs text-light px-2 rounded-full bg-white`
          : `cursor-pointer mr-2 hover:bg-opacity-100 bg-opacity-80 text-xs text-light px-2 rounded-full bg-${item.color}-500`
      }
    />
  );
}

export default OneTag;
