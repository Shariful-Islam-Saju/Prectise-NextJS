import { findUser } from "@/utils/getUser";
import Dashboard from "./Dashboard";

export default async function page() {
  const user = await findUser();

  return <Dashboard user={user} />;
}
