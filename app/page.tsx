import client from "@/db";

async function getUserDetails() {
  //instead of sending request snd talking to own server we fetch data directly from db
  const user = await client.user.findFirst();
  return {
    username: user?.username,
    name: "lalit",
  };
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.username}</div>

          {userData?.name}
        </div>
      </div>
    </div>
  );
}
