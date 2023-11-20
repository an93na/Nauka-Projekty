import React, { useEffect, useState } from "react";

export const Kartki = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.org/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const wyswietl = (a) => {
    if (check) {
      return a;
    }
    return a.slice(0, 200);
  };
  const postToDisplay = posts.filter((post) => post.title.toLowerCase().includes(search));
  // console.log(posts);
  return (
    <article>
      <div>
        <h3>Posty</h3>
        </div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={check}
                  onChange={() => setCheck((prevState) => !prevState)}
                />
                {check ? "Content less" : "Content more"}
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          {postToDisplay.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{wyswietl(post.content)}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
