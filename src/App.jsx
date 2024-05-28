import "./App.css";
import Accordion from "./components/accordion/Accordion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/image-slider/ImageSlider";
import NestedComments from "./components/nested-comments/NestedComments";
import Pagination from "./components/pagination/Pagination";
import ShimmerUI from "./components/shimmer-ui/ShimmerUI";
import LiveStream from "./components/live-stream/LiveStream";
import AutoComplete from "./components/autocomplete/AutoComplete";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <header className="py-4 bg-black text-white">
        <nav className="flex justify-around">
          <a href="/">Home</a>
          <a href="/accordion">Accordion</a>
          <a href="/slider">Image Slider</a>
          <a href="/comments">Nested Comments</a>
          <a href="/pagination">Pagination</a>
          <a href="/shimmer-ui">Shimmer UI</a>
          <a href="/live-stream">Live Stream</a>
          <a href="/auto-complete">Auto Complete</a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/accordion" element={<Accordion />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/slider" element={<ImageSlider />}></Route>
            <Route path="/comments" element={<NestedComments />}></Route>
          </Route>
          <Route path="/comments" element={<NestedComments />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/shimmer-ui" element={<ShimmerUI />}></Route>
          <Route path="/live-stream" element={<LiveStream />}></Route>
          <Route path="/auto-complete" element={<AutoComplete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
