import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ForRecipe from "./pages/ForRecipe";
import ForIngre from "./pages/ForIngre";
import Fr from './pages/Fr';


import RecipeComponent from "./pages/RecipeComponent";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/forrecipe" element={<ForRecipe />} />
          <Route path="/foringre" element={<ForIngre />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
