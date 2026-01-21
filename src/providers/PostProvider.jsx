import { useState } from "react";
import { PostsContext } from "../contexts";

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
