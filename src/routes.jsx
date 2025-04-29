import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import MoviePage from './components/MoviePages';
import AddForm from './components/AddForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/add" element={<AddForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;