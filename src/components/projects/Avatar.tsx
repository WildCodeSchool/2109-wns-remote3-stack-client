import React from 'react';
import { Link } from 'react-router-dom';
import dfltAvatar from '@assets/images/DefaultAvatar.webp';
import { GetUserByID } from '@api/types/GetUserByID';

interface IProps {
  data: GetUserByID;
}

function Avatar({ data }: IProps): JSX.Element {
  return (
    <Link to="/profil">
      <div className="flex">
        <div
          className="h-24 lg:h-12 lg:w-12 w-24 rounded-full border-4 lg:border-2 border-lightPurple"
          style={{
            backgroundImage: `url(${
              data.getUserByID.avatar === undefined
                ? dfltAvatar
                : data.getUserByID.avatar
            })`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
        <div className="flex  flex-col items-center lg:items-start lg:ml-1">
          <div className="flex  font-normal text-lightPurple text-2xl lg:text-base mt-2 lg:mt-0">
            <p className="lg:ml-2">
              {data.getUserByID.firstName} {data.getUserByID.lastName}
            </p>
          </div>
          <p className="text-gray-500 text-xs lg:ml-2">
            {data.getUserByID.email}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Avatar;
