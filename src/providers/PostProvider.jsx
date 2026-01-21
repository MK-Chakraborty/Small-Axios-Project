import axios from "axios";
import { useEffect, useState } from "react";
import { PostsContext } from "../contexts";

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/posts`);
        if (response && response.data) {
          setPosts(response.data);
        }
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

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, error }}>
      {children}
    </PostsContext.Provider>
  );
}
