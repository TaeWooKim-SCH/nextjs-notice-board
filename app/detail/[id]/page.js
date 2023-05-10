import { connectDB } from "@/utill/database"
import { ObjectId } from "mongodb";

export default async function Detail({params}) {
    const db = (await connectDB).db("notice-board");
    // let result = await db.collection('post').findOne({_id: new ObjectId('64550d481d9ce97c32fa7e86')})
    let result = await db.collection('post').findOne({_id: new ObjectId(params.id)})
    console.log(params.id);
    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}