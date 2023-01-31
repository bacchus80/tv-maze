import "./App.css";
import { NavBar } from "./components";
import { Detail, Favorites, Search } from "./screens";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
   return (
      <Router>
         <div className="App">
            <NavBar />
            <Routes>
               <Route path="/" element={<Search />} />
               <Route path="/?:q" element={<Search />} />
               <Route path="/favorites" element={<Favorites />} />
               <Route path="/detail/:id" element={<Detail />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
