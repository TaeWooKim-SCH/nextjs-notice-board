'use client'

import Link from "next/link";

export default function ListItem({ result }) {

  return (
    <>
      {result.map((x, i) => 
          <div className="list-item" key={i}>
            <Link href={'/detail/' + x._id}>
              <h4>{x.title}</h4>
            </Link>
            <Link href={'/edit/' + x._id}>✏</Link>
            <span onClick={(e) => {
              fetch('/api/post/delete', {
                method: 'POST',
                body: JSON.stringify({
                  id: x._id.toString(),
                  author: x.author
                })
              })
                .then((data) => data.json())
                .then((data) => {
                  if (data === "다른 사용자가 작성한 글입니다.") {
                    return alert(data);
                  }
                  e.target.parentElement.style.opacity = 0
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none'
                  }, 1000)
                })
            }}>❌</span>
            <p>1월 1일</p>
          </div>
      )}
    </>
  );
}