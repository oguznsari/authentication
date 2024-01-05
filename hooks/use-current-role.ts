import { useSession } from "next-auth/react";

/**
 * Can be used for all client-side application
 *
 * @returns
 */
export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user?.role;
};
