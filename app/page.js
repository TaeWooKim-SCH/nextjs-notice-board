// DB입출력하는 코드는 server component 안에서만 사용합시다. 
// client component 안에 적은 코드는 유저들도 쉽게 볼 수 있기 때문에 그렇습니다. 
import { connectDB } from "/utill/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("notice-board");
  const result = await db.collection('post').find().toArray();

  return (
    <main>
      {result[0].title}
    </main>
  )
}
