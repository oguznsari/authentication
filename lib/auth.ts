import { auth } from "@/auth";

/**
 * This can be used in server components, server actions & API routes
 * Basically anything server-side
 *
 * @returns
 */
export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
