import { Suspense, use } from "react";
import "./App.css";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const postsPromise = getPosts();

function PostList() {
  const posts = use(postsPromise);

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default App;
