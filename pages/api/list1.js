import { connectDB } from "@/utill/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("notice-board");
  const result = await db.collection('post').find().toArray();

  if (req.method === 'GET') {
    return res.status(200).send(result);
  }
  
}