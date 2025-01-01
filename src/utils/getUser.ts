import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function findUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    return user;
  }

  return undefined;
}
