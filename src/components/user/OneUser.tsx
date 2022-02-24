import { GetAllUsers_getAllUsers } from '@api/types/GetAllUsers';
import React from 'react';
import dfltAvatar from '@assets/images/DefaultAvatar.webp';

interface IProps {
  item: GetAllUsers_getAllUsers;
}

function OneUser({ item }: IProps): JSX.Element {
  return (
    <div className="w-full bg-darkGray border border-lightGray transform hover:border-lightPurple drop-shadow-lg hover:bg-transparent duration-500 rounded-lg my-4 p-3 mx-2">
      <div className="flex justify-start mt-5">
        {/* todo: replace by a real avatar picture */}
        <div className="h-10 w-10 rounded-full border-4 lg:border-4 border-purple">
          <img src={dfltAvatar} alt="avatar icon" />
        </div>
        <div className="ml-5">
          <div className="flex justify-start font-semibold">
            {item.firstName} {item.lastName}
          </div>
          <div className="flex justify-start font-extralight h-2">
            {item.email}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default OneUser;
