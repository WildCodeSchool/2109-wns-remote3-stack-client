import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  item: {
    icon: string;
    name: string;
    link: string;
  };
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

function LinkButton({ item, setIsSidebar }: IProps): JSX.Element {
  return (
    <div>
      <Link to={item.link}>
        <button
          type="button"
          onClick={() => setIsSidebar(false)}
          className="bg-darkGray p-5 lg:py-5 lg:px-0 my-5 lg:my-0 w-full rounded-lg flex items-center"
        >
          <img src={item.icon} alt="icon" />
          <p className="ml-4">{item.name}</p>
        </button>
      </Link>
    </div>
  );
}

export default LinkButton;
