import { GET_ALL_USERS } from '@api/queries/usersQueries';
import { GetAllUsers } from '@api/types/GetAllUsers';
import { useQuery } from '@apollo/client';
import OneUser from '@components/user/OneUser';
import React from 'react';

function UsersList(): JSX.Element {
  const { loading, error, data } = useQuery<GetAllUsers>(GET_ALL_USERS);

  if (loading) {
    return <p>...loading</p>;
  }
  if (error || !data) {
    return <p>error</p>;
  }

  return (
    <div className="pb-5 lg:py-0">
      <div className="mt-2 px-3 lg:pr-6">
        {data.getAllUsers.map((item) => {
          return (
            <div key={item.id}>
              <OneUser item={item} />
            </div>
          );
        })}
        {data.getAllUsers.length === 0 && (
          <p className="font-normal lg:py-2 py-2 text-purple">
            There is no users for now
          </p>
        )}
      </div>
    </div>
  );
}

export default UsersList;
