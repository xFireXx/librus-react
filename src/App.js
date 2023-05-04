import './App.css';
import LoginForm from './components/LoginForm/LoginForm'
import { Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" exact element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </> 
  );
}

export default App;
