import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db('notice-board');
  console.log(req.query);
  const result = await db.collection('comment').find({
    parent: new ObjectId(req.query.id)
  }).toArray();
  res.status(200).json(result);
}