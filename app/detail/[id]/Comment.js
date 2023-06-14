'use client'

import { useState } from "react";

export default function Comment({ id, commentData }) {
  let [comment, setComment] = useState("");

  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => {
        fetch('/api/comment/new', {
          method: 'POST', body: JSON.stringify({_id: id, comment}),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => {window.location.href = res.url})
      }
      }>댓글 전송</button>
      {commentData &&
        <>
          <div>{commentData.author}</div>
          <div>{commentData.comment}</div>
        </>
      }
    </div>
  );
}