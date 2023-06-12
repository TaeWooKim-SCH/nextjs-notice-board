import { connectDB } from "@/utill/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  const db = (await connectDB).db("notice-board");
  if (req.method === "POST") {
    if (req.body.title === '' || req.body.content === '') {
      return res.status(500).json('너 빈칸 있음');
    }
    const result = await db.collection('post').insertOne(req.body);
    res.status(200).redirect('/write');
  }
}