
import Login from './pages/Login.jsx';
import Signup from './pages/signup';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Startup from './pages/Startup';
import Investors from './pages/Investors';
import Register from './pages/Register';
import Chat from './pages/Chat';


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="home" element={<Home/>} />
          <Route path="/" element={<Login />} />
          <Route path="startup" element={<Startup/>} />
          <Route path="investors" element={<Investors/>} />
          <Route path="signup" element={<Signup />} />
          
          
          
          <Route path="chats" element={<Chat/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
        </Routes>
      
    </div>
  );
}

export default App;
