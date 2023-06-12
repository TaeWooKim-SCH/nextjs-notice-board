import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  let parse = JSON.parse(req.body);
  if (req.method === 'POST') {
    if (session.user.email === parse.author) {
      const db = (await connectDB).db('notice-board');
      let result = await db.collection('post').deleteOne({_id: new ObjectId(parse.id)});
      res.status(200).json('삭제완료');
    }
    else {
      res.status(500).json('다른 사용자가 작성한 글입니다.');
    }
  }
}