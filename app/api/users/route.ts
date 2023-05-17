import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store",
  });
  const users = await res.json();

  const cookieStore = cookies();
  // const token = cookieStore.get("token");

  const response = NextResponse.json(users);

  response.cookies.set({
    name: "token",
    value: "tokenです",
  });

  return response;
};
