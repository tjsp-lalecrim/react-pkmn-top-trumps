
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Game from './components/Game';
import Layout from "./components/Layout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
