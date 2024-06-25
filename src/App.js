
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import{Route, Routes} from 'react-router-dom'
import About from './About';
import Packages from './Packages';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import TodoList from './TodoList';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
   <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/TodoList" element={<TodoList />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />


      </Routes>
    </div>
  );
}

export default App;
