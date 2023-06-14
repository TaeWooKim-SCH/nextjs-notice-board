import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  console.log(req.body);
  if (req.method === 'POST') {
    if (req.body.comment === "") {
      return res.status(500).json('너 빈칸 있음');
    }
    req.body._id = new ObjectId(req.body._id)
    const db = (await connectDB).db("notice-board");
    const result = await db.collection('comment').insertOne(req.body);
    console.log(result);
    res.redirect(302, '/list');
  }
}
