import React, { useEffect, useState } from "react";
import { DodajPost } from "./DodajPost";

export const Kartki = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);
  const [dodaj, setDodaj] = useState(false);
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
  const postToDisplay = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(dodaj);
  return (
    <article>
      <div style={{ display: "flex", gap: 30, alignItems: "flex-start" }}>
        <h3>Posty</h3>
        <div
          style={{ border: "1px solid white", borderRadius: 10, padding: 10 }}
        >
          Liczba wszystkich postów: {posts.length}
        </div>
        <div
          style={{ border: "1px solid white", borderRadius: 10, padding: 10 }}
        >
          Znalezionych postów: {postToDisplay.length}
        </div>
      </div>
      <div style={{padding: 10}}>
        <label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={dodaj}
          onChange={() => setDodaj((prevState) => !prevState)}
        />{" "}
        Dodaj post
      </label>
      {dodaj && <DodajPost posts={posts} setPosts={setPosts}/>}
      </div>
      
      <input
        type="text"
        placeholder="search in title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Lp.</th>
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
