import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { DafaultLayout } from "./layouts/DeafultLayout";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<DafaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
