import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login'; // Optional, if exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="text-2xl text-center mt-10">Welcome to the Blog App</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
