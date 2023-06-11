import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const change = {title: req.body.title, content: req.body.content};
    const db = (await connectDB).db("notice-board");
    const result = await db.collection('post').updateOne(
      {_id: new ObjectId(req.body.id)},
      {$set: change}
    );
    res.redirect(302, '/list');
  }
}