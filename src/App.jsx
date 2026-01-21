import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import AddPost from "./components/Posts/AddPost";
import AllPosts from "./components/Posts/AllPosts";
import EditPost from "./components/Posts/EditPost";
import { PostsContext, UpdatePostContext } from "./contexts";

function App() {
  const { updatablePost } = useContext(UpdatePostContext);
  const { error } = useContext(PostsContext);

  return (
    <section className="max-w-7xl border border-[#3b3440] mx-auto text-white">
      <Header />
      <AllPosts />
      {updatablePost.updatable ? <EditPost /> : <AddPost />}
      {error && (
        <div className="bg-red-500 text-white text-base p-1 mx-2 my-7 border border-white">
          An Error Occurrd: {error}
        </div>
      )}
    </section>
  );
}

export default App;
