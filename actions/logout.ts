"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // if ypu wanna do some server stuff before you logout choose this option
  await signOut();
};

/**
 * Power of server action,
 * Remove code completely from JS bundle
 */
