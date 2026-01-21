import { useContext, useState } from "react";
import { PostsContext } from "../../contexts";

export default function AddPost() {
  const { posts, setPosts } = useContext(PostsContext);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastId = posts.length ? posts.at(-1).id : 1;

    const postToAdd = {
      id: parseInt(lastId) + 1,
      title: newPost.title,
      body: newPost.body,
    };
    setPosts([...posts, postToAdd]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <section className="border-b border-[#3b3440]  pb-10">
      <div className="border-b border-[#3b3440] mt-5 mb-10">
        <h2 className="text-[#c1aed1] text-xl sm:text-2xl md:text-5xl text-end font-light px-5 pb-8">
          Add New Post
        </h2>
      </div>
      <form onSubmit={handleSubmit} action="" className="px-5">
        <input
          value={newPost.title}
          onChange={(e) =>
            setNewPost({
              ...newPost,
              title: e.target.value,
            })
          }
          type="text"
          placeholder="Post Title"
          className="block border border-[#3b3440] p-2 w-full mb-5 rounded-2xl"
          required
        />
        <textarea
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          type="text"
          placeholder="Post Description"
          className="block border border-[#3b3440] p-2 w-full mb-5 rounded-2xl"
          required
        />
        <button
          type="submit"
          className="block border border-[#3b3440] p-2 rounded-2xl mx-auto hover:bg-[#c1aed1] hover:font-black hover:cursor-crosshair"
        >
          Add
        </button>
      </form>
    </section>
  );
}
