import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css";
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
// import {faker} from '@faker-js/faker';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />

      </Routes>
      </div>
      </>
  );
}

export default App;
