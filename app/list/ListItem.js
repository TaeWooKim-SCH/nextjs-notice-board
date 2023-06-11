'use client'

import Link from "next/link";

export default function ListItem({ result }) {

  return (
    <>
      {result.map((x, i) => 
          <div className="list-item" key={i}>
            <Link href={'/detail/' + result[i]._id}>
              <h4>{x.title}</h4>
            </Link>
            <Link href={'/edit/' + result[i]._id}>✏</Link>
            <span onClick={() => {
              fetch('/api/test', {
                method: 'POST',
                body: '데이터'
              })
                .then(() => {
                  console.log(123);
                })
            }}>❌</span>
            <p>1월 1일</p>
          </div>
      )}
    </>
  );
}