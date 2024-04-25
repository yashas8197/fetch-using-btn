import "./App.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, error, loading, fetchData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return (
    <div>
      <h1>Fetch data on button click</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        {loading && "Loading..."}
        {error && <p>An error occured while fetching the posts.</p>}
        <ul>
          {data && data.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    </div>
  );
}
