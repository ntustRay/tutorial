import React from 'react';
import {fetchUsers} from '@/utils/action';
import DeleteButton from './DeleteButton';

const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div className='mt-4'>
      {users.length ?
        <>
          {users.map((user: any) => {
            return <h4 key={user.id} className='capitalize text-lg flex justify-between items-center mb-2'>
              {user.firstname} {user.lastname}
              <DeleteButton id={user.id} />
            </h4>
          })}
        </> :
        <p>No user found...</p>
      }
    </div>
  );
}

export default UserList;
