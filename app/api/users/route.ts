import {fetchUsers, saveUser} from "@/utils/action";

export const GET = async () => {
  const user = await fetchUsers();
  return Response.json({user});
}