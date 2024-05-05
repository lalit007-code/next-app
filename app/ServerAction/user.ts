"use server";
//whenever creating server actions we have to use "use server"
import client from "@/db";

export default async function signup(username: string, password: string) {
  try {
    await client.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
