import React from 'react';
import {deleteUser, removeUser} from '@/utils/action';


const DeleteButton = ({id}: {id: string}) => {
  const removeUserWithId = async (formData: FormData) => {
    'use server';
    await removeUser(id, formData);
  };

  return (
    <form action={removeUserWithId}>
      <input type='hidden' name='name' value='shakeAndBake' />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'>
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
