'use client';

import React from 'react';
import {createUser} from '@/utils/action';

const Form = () => {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className='text-2xl capitalize mb-4'>Form</h2>
      <input
        className={inputStyle}
        type='text'
        name='firstname'
        defaultValue={'peter'}
        required
      />
      <input
        className={inputStyle}
        type='text'
        name='lastname'
        defaultValue={'smith'}
        required
      />
      <button className={buttonStyle} type='submit'>Submit</button>
    </form>
  );
}

const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const buttonStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form;
