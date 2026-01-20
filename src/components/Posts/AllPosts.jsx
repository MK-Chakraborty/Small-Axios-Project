import { allPosts } from "../../fakeDB/db";
import Post from "./Post";

export default function AllPosts() {
  const posts = allPosts();
  return (
    <section className="border-b border-[#3b3440] mt-5 mb-10">
      <h2 className="text-[#c1aed1] text-xl sm:text-2xl md:text-5xl font-light px-5 pb-8">
        All Posts
      </h2>
      {posts.map((post) => (
        <Post key={post.kd} post={post} />
      ))}
    </section>
  );
}
