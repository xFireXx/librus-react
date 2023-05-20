import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Login from './pages/Login/Login';
import { AppProvider } from './context/loginButtonContext';
import PanelStudent from './pages/PanelStudent/PanelStudent';
import PanelTeacher from './pages/PanelTeacher/PanelTeacher';

function App() {
  return (
    <>
      <AppProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/kursy" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/panelStudent" element={<PanelStudent />} />
            <Route path="/panelTeacher" element={<PanelTeacher />} />
          </Routes>
      </AppProvider>
    </>
  );
}

export default App;
