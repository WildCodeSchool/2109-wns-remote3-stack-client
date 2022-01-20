import React from 'react';

interface IProps {
  item: ITagList;
}

function OneTag({ item }: IProps): JSX.Element {
  return (
    <input
      value={item.label}
      type="button"
      className={` bg-transparent opacity-80 hover:opacity-100 text-xs text-light border px-2 rounded-full bg-${item.color}`}
    />
  );
}

export default OneTag;
