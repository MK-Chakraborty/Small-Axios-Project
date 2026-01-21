import { useState } from "react";
import { UpdatePostContext } from "../contexts";

export default function UpdatePostProvider({ children }) {
  const [updatablePost, setUpdatablePost] = useState({
    id: 0,
    updatable: false,
  });
  return (
    <UpdatePostContext.Provider value={{ updatablePost, setUpdatablePost }}>
      {children}
    </UpdatePostContext.Provider>
  );
}
