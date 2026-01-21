import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PostProvider from "./providers/PostProvider.jsx";
import UpdatePostProvider from "./providers/UpdatePostProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostProvider>
      <UpdatePostProvider>
        <App />
      </UpdatePostProvider>
    </PostProvider>
  </StrictMode>,
);
