import { useContext } from "react";
import { PostsContext, UpdatePostContext } from "../../contexts";

export default function Post({ post }) {
  const { posts, setPosts } = useContext(PostsContext);
  const { setUpdatablePost } = useContext(UpdatePostContext);
  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };
  return (
    <div className="border border-[#3b3440]">
      <div className="flex flex-wrap justify-between">
        <h2 className="text-[#c1aed1] text-base sm:text-base md:text-xl font-light px-5 py-2">
          ► {post.id}. {post.title}
        </h2>
        <div>
          <button
            type="submit"
            className="border border-[#3b3440] p-2 rounded-2xl  hover:bg-[#f54daf] hover:font-black hover:cursor-not-allowed m-1"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
          <button
            onClick={() => setUpdatablePost({ id: post.id, updatable: true })}
            type="submit"
            className="border border-[#3b3440] p-2 rounded-2xl  hover:bg-[#40b811] hover:font-black hover:cursor-cell m-1"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
