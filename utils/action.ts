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

export const deleteUser = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user: User) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers, null, 2));
  revalidatePath('/actions');
};
export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get('name') as string;
  console.log(`Removing user with id: ${id} and name: ${name}`);

  const users = await fetchUsers();
  const updatedUsers = users.filter((user: User) => user.id !== id);
  await writeFile('users.json', JSON.stringify(updatedUsers, null, 2));
  revalidatePath('/actions');

};