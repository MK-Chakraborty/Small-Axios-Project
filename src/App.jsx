import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import AddPost from "./components/Posts/AddPost";
import AllPosts from "./components/Posts/AllPosts";
import EditPost from "./components/Posts/EditPost";
import { UpdatePostContext } from "./contexts";

function App() {
  const { updatablePost } = useContext(UpdatePostContext);

  return (
    <section className="max-w-7xl border border-[#3b3440] mx-auto text-white">
      <Header />
      <AllPosts />
      {updatablePost.updatable ? <EditPost /> : <AddPost />}
    </section>
  );
}

export default App;
