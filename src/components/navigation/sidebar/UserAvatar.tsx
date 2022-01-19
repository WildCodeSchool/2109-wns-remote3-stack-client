import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useUserFromStore } from '@store/user.slice';
import dfltAvatar from '@assets/DefaultAvatar.webp';

interface IProps {
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

function UserAvatar({ setIsSidebar }: IProps): JSX.Element {
  const { user } = useUserFromStore();
  return (
    <div>
      <Link to="/profil">
        <button
          onClick={() => setIsSidebar(false)}
          type="button"
          className="w-full flex flex-col lg:flex-row items-center py-3"
        >
          <div
            className="h-24 lg:h-8 w-24 lg:w-8 rounded-full border-4 lg:border-2 border-purple"
            style={{
              backgroundImage: `url(${
                user.avatarUrl === undefined ? dfltAvatar : user.avatarUrl
              })`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          <div className="flex flex-col items-center lg:ml-2">
            <div className="flex  font-bold text-purple text-2xl lg:text-base mt-2 lg:mt-0">
              <p>Welcome</p>
              <p className="ml-2">{user.username}</p>
            </div>
            <p className="text-gray-500 lg:hidden">{user.email}</p>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default UserAvatar;
