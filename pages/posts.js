// pages/posts.js
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
      props: { posts },
    };
  }
  
  export default function Posts({ posts }) {
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  