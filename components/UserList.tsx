import React from 'react';
import {fetchUsers} from '@/utils/action';

const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div className='mt-4'>
      {users.length ?
        <>
          {users.map((user: any) => {
            return <h4 key={user.id} className='capitalize'>
              {user.firstname} {user.lastname}
            </h4>
          })}
        </> :
        <p>No user found...</p>
      }
    </div>
  );
}

export default UserList;
