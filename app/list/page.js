import { connectDB } from "/utill/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {
  const client = await connectDB;
  const db = client.db("notice-board");
  const result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}