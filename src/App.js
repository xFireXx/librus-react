import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses'

function App() {
  return (
    <>
     <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/kursy" element={<Courses />} />
    </Routes>
    </> 
  );
}

export default App;
