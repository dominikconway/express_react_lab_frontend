import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const URL = 'https://alex-express-react-portfolio.herokuapp.com/'

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects URL={URL} /> } />
          <Route path='/about' element={ <About URL={URL} /> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
