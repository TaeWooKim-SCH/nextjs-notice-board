import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/utill/database";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const parse = JSON.parse(req.body);
  if (session) {
    parse.author = session.user.email;
  }
  if (req.method === 'POST') {
    if (req.body.comment === "") {
      return res.status(500).json('너 빈칸 있음');
    }
    const db = (await connectDB).db("notice-board");
    const result = await db.collection('comment').insertOne(parse);
    res.redirect(302, '/list');
  }
}
