import React, { useState } from 'react';
import HeaderList from '../../components/navigation/HeaderList';

function TaskList(): JSX.Element {
  const [isForm, setIsForm] = useState(false);
  return (
    <div className="py-5 lg:py-0">
      <HeaderList setIsForm={setIsForm} name="Tasks list" />
      {isForm && <p>form</p>}
    </div>
  );
}

export default TaskList;
