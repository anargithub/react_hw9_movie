import './App.css';
import { Route, Routes, Router } from "react-router-dom";
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/movie/:movieId" element={<MoviePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
