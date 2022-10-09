//import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
