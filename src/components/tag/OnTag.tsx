import React, { useState } from 'react';

interface IProps {
  item: ITagList;
}

function OneTag({ item }: IProps): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState('darkBlue');
  return (
    <input
      onClick={() => setBackgroundColor(item.color)}
      value={item.label}
      type="button"
      className={`mr-2 hover:bg-opacity-100 bg-opacity-80 text-xs text-light border border-${backgroundColor}-500 px-2 rounded-full bg-${backgroundColor}-500`}
    />
  );
}

export default OneTag;
