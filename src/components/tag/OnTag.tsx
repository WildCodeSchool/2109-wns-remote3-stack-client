import React from 'react';

interface IProps {
  item: ITagList;
}

function OneTag({ item }: IProps): JSX.Element {
  return (
    <button
      type="button"
      className={` opacity-80 hover:opacity-100 text-xs text-light border px-2 rounded-full bg-${item.color}`}
    >
      {item.label}
    </button>
  );
}

export default OneTag;
