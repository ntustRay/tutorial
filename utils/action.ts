'use server'
import {readFile, writeFile} from 'fs/promises';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';

type User = {
  id: string;
  firstname: string;
  lastname: string;
}

export const createUser = async (prevState: any, formData: FormData) => {
  console.log(prevState);
  console.log('Creating user...');
  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const newUser: User = {firstname, lastname, id: Date.now().toString()};
  
  try {
    await saveUser(newUser);
    revalidatePath('/actions');
    return 'user created successfully...';
  } catch (error) {
    console.log(error);
    return 'failed to create user...';
  }

}

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', {encoding: 'utf-8'});
  const users = result ? JSON.parse(result) : [];
  return users;
}

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users, null, 2));
}