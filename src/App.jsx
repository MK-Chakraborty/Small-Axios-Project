import "./App.css";
import Header from "./components/Header";
import AddPost from "./components/Posts/AddPost";
import AllPosts from "./components/Posts/AllPosts";
import PostProvider from "./providers/PostProvider";

function App() {
  return (
    <PostProvider>
      <section className="max-w-7xl border border-[#3b3440] mx-auto text-white">
        <Header />
        <AllPosts />
        <AddPost />
      </section>
    </PostProvider>
  );
}

export default App;
