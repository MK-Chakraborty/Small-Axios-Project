import axios from "axios";
import { useContext, useState } from "react";
import { PostsContext } from "../../contexts";

export default function AddPost() {
  const { posts, setPosts, setError } = useContext(PostsContext);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const lastId = posts.length ? posts.at(-1).id : 1;
      const postToAdd = {
        id: (parseInt(lastId) + 1).toString(),
        title: newPost.title,
        body: newPost.body,
      };
      const response = await axios.post(
        `http://localhost:8000/posts`,
        postToAdd,
      );
      setPosts([...posts, response.data]);
      setNewPost({ title: "", body: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.response?.statusText ||
            error.message,
        );
      } else {
        setError("Something went wrong");
      }
    }
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
