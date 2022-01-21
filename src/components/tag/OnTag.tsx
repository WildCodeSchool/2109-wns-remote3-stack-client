import React, { useState } from 'react';

interface IProps {
  item: ITagList;
}

function OneTag({ item }: IProps): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState('bg-lightPurple');
  return (
    <input
      onClick={() => setBackgroundColor(`bg-${item.color}-500`)}
      value={item.label}
      type="button"
      className={`cursor-pointer mr-2 hover:bg-opacity-100 bg-opacity-80 text-xs text-light px-2 rounded-full ${backgroundColor}`}
    />
  );
}

export default OneTag;
