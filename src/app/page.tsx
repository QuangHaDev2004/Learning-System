import { connectDB } from "./lib/mongoose";

export default async function Home() {
  const connect = connectDB();
  console.log("Home - connected:", connect);
  

  return (
    <>
      <h1>Main</h1>
    </>
  );
}
