import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/NotFound/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
