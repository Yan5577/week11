import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css";
import HomePage from './pages/homePage';


function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />

      </Routes>
      </div>
      </>
  );
}

export default App;
