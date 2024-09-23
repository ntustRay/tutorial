'use server'
import {readFile, writeFile} from 'fs/promises';
import {revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';

type User = {
  id: string;
  firstname: string;
  lastname: string;
}

export const createUser = async (formData: FormData) => {
  console.log('create user');
  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const newUser: User = {firstname, lastname, id: Date.now().toString()};
  const rawData = Object.fromEntries(formData.entries());
  await saveUser(newUser);
  // revalidatePath('/actions');
  redirect('/actions');
  console.log(rawData)
  console.log({firstname, lastname});
}

export const fetchUsers = async (): Prmoise<User[]> => {
  const result = await readFile('users.json', {encoding: 'utf-8'});
  const users = result ? JSON.parse(result) : [];
  return users;
}

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users, null, 2));
}