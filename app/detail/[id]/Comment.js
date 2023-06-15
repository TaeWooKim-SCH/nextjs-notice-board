'use client'

import { useEffect, useState } from "react";

export default function Comment({ id, commentData }) {
  let [comment, setComment] = useState("");
  let [commentList, setCommentList] = useState([]);

  const fetchData = async () => {
    const res = await fetch('/api/comment/list?id=' + id);
    const data = await res.json();
    setCommentList(data);
  }

  useEffect(() => {
    fetchData();
    console.log(commentList);
  }, [])
  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => {
        fetch('/api/comment/new', {
          method: 'POST', body: JSON.stringify({id, comment}),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => {window.location.reload()})
      }
      }>댓글 전송</button>
      {
        commentList.length ? 
        commentList.map((com) => (
          <section key={com._id}>
            <h3>{com.content}</h3>
            <div>{com.authorEmail}</div>
            <div>{com.authorName}</div>
          </section>
        )) :
        null
      }
    </div>
  );
}