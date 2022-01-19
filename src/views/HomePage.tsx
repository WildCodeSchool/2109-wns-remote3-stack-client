import React, { useState } from 'react';
import CreateUpdateTag from './tags/CreateUpdateTag';

function HomePage(): JSX.Element {
  const [data, setData] = useState<ITagList[]>([]);

  // ON CREATED TASK ! ADD THE CREATED TASK TO THE ARRAY
  const onTagCreated = (p: ITagList) => {
    setData([...data, p]);
  };
  return (
    <div className="p-5">
      <h1>HOMEPAGE</h1>
      <CreateUpdateTag onTagCreated={onTagCreated} />
    </div>
  );
}

export default HomePage;
