import { connectDB } from "@/utill/database";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    let db = (await connectDB).db('notice-board');
    await db.collection('users').insertOne(req.body);
    return res.status(200).json('가입성공');
  }
}