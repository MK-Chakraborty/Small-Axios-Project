import { useContext, useState } from "react";
import api from "../../api/api";
import { PostsContext, UpdatePostContext } from "../../contexts";

export default function EditPost() {
  const { updatablePost, setUpdatablePost } = useContext(UpdatePostContext);
  const { posts, setPosts, setError } = useContext(PostsContext);
  const postToEdit = posts.find((post) => post.id === updatablePost.id);
  const [editedPost, setEditedPost] = useState(postToEdit);

  const handleUpdateSave = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(
        `/posts/${updatablePost.id}`,
        editedPost,
      );
      const updatedPosts = posts.map((post) => {
        return post.id === postToEdit.id ? editedPost : post;
      });
      setPosts(updatedPosts);
      setUpdatablePost({ id: 0, updatable: false });
    } catch (error) {
      if (api.isAxiosError(error)) {
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
          Edit Post
        </h2>
      </div>
      <form action="" onSubmit={handleUpdateSave} className="px-5">
        <input
          value={editedPost.title}
          onChange={(e) =>
            setEditedPost({ ...editedPost, title: e.target.value })
          }
          type="text"
          placeholder="Post Title"
          className="block border border-[#3b3440] p-2 w-full mb-5 rounded-2xl"
        />
        <textarea
          value={editedPost.body}
          onChange={(e) =>
            setEditedPost({ ...editedPost, body: e.target.value })
          }
          type="text"
          placeholder="Post Description"
          className="block border border-[#3b3440] p-2 w-full mb-5 rounded-2xl"
        />
        <button
          type="submit"
          className="block border border-[#3b3440] p-2 rounded-2xl mx-auto hover:bg-[#c1aed1] hover:font-black hover:cursor-cell"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}
