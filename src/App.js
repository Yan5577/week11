import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css";
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      </Routes>
      </div>
      </>
  );
}

export default App;
