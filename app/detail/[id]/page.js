import { connectDB } from "@/utill/database"
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail({params}) {
    const db = (await connectDB).db("notice-board");
    let result = await db.collection('post').findOne({_id: new ObjectId(params.id)})
    let commentData = await db.collection('comment').findOne({_id: new ObjectId(params.id)})
    console.log(commentData)
    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment id={params.id} commentData={commentData} />
        </div>
    )
}