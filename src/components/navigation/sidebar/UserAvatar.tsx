import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useUserFromStore } from '@store/user.slice';
import dfltAvatar from '@assets/images/DefaultAvatar.webp';

interface IProps {
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
}

function UserAvatar({ setIsSidebar }: IProps): JSX.Element {
  const { user } = useUserFromStore();
  console.log(user);
  return (
    <div>
      <Link to="/profil">
        <button
          onClick={() => setIsSidebar(false)}
          type="button"
          className="w-full flex flex-col lg:flex-row items-center py-3"
        >
          <div
            className="h-24 lg:h-10 lg:w-10 w-24 rounded-full border-4 lg:border-2 border-purple"
            style={{
              backgroundImage: `url(${
                user.avatar === undefined ? dfltAvatar : user.avatar
              })`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          <div className="flex  flex-col items-center lg:items-start lg:ml-1">
            <div className="flex  font-bold text-purple text-2xl lg:text-base mt-2 lg:mt-0">
              <p className="lg:ml-2">{user.firstName}</p>
            </div>
            <p className="text-gray-500 text-sm lg:ml-2">{user.email}</p>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default UserAvatar;
