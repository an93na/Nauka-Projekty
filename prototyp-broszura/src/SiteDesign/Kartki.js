import React, { useEffect, useState } from "react";

export const Kartki = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts)
  return <article>
    <h3>Posty</h3>
    <table>
      <thead>
        <tr>
        <th>Title</th>
        <th>Content</th>
        <th></th>
        </tr>
      </thead>
    </table>
  </article>;
};
