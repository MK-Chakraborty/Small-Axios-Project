import { useState } from "react";
import { PostsContext } from "../contexts";
import { allPosts } from "../fakeDB/db";

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState(allPosts());
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
