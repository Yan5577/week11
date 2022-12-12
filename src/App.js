import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css";
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />

      </Routes>
      </div>
      </>
  );
}

export default App;
