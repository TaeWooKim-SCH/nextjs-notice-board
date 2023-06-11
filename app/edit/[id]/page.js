
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function Edit({ params }) {
  let db = (await connectDB).db("notice-board");
  let result = await db.collection('post').findOne({
    _id: new ObjectId(params.id)
  })

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title}/>
        <input name="content" defaultValue={result.content}/>
        <input style={{display: 'none'}} name="id" defaultValue={result._id.toString()} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}