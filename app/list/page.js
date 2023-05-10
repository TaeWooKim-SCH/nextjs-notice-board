import { connectDB } from "/utill/database";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("notice-board");
  const result = await db.collection('post').find().toArray();
  // console.log(result);

  return (
    <div className="list-bg">
      {result.map((x, i) => 
        <div className="list-item" key={i}>
          <h4>{x.title}</h4>
          <p>1월 1일</p>
          <Link href="/detail/64550d481d9ce97c32fa7e86">상세내용</Link>
        </div>
      )}
    </div>
  )
}