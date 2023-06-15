import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (!session) {
    return res.status(500);
  }

  if (req.method === 'POST') {
    if (req.body.comment === "") {
      return res.status(500).json('너 빈칸 있음');
    }
    
    const data = {
      content: req.body.comment,
      parent: new ObjectId(req.body.id),
      authorEmail: session.user.email,
      authorName: session.user.name
    }
    const db = (await connectDB).db("notice-board");
    const result = await db.collection('comment').insertOne(data);

    res.status(200).json('댓글 추가 완료');
  }
}

