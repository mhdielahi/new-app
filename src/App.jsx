import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Aboutus from "./pages/aboutus/aboutus";
import Article from "./pages/article/Article";
import NewArticle from "./pages/newArticle/NewArticle";
import Eror from "./pages/eror404/Eror404";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Eror />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/creat" element={<NewArticle />} />
      </Routes>
    </div>
  );
}

export default App;
