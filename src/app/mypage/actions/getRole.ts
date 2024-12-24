"use server";

import { cookies } from "next/headers";

export const getRole = async (): Promise<string> => {
  const cookieStore = await cookies();
  return cookieStore.get("role")?.value || "APPLICANT";
};
