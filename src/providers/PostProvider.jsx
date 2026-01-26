import { useEffect, useState } from "react";
import api from "../api/api";
import { PostsContext } from "../contexts";

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(`/posts`);
        if (response && response.data) {
          setPosts(response.data);
        }
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

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, error, setError }}>
      {children}
    </PostsContext.Provider>
  );
}
