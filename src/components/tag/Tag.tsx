import React from 'react';

interface IProps {
  item: ITagList;
}

function OneTag({ item }: IProps): JSX.Element {
  return (
    <div className={`border rounded-full bg-${item.color}`}>{item.label}</div>
  );
}

export default OneTag;
