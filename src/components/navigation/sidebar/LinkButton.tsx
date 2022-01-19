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
          className="bg-darkGray shadow-purple lg:shadow-none p-5 lg:py-4 lg:px-0 my-5 lg:my-0 w-full rounded-lg flex items-center"
        >
          <img className="h-5 w-5" src={item.icon} alt="icon" />
          <p className="ml-4 text-sm">{item.name}</p>
        </button>
      </Link>
    </div>
  );
}

export default LinkButton;
