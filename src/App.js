
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/log-in' element={<Login />}></Route>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
