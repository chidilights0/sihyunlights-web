import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Main from './pages/Main';
import Projects from './pages/Projects';

import './App.css';
import Transition from './components/Transition';

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Transition><Main/></Transition>}/>
          <Route path='projects' element={<Transition><Projects/></Transition>}/>
        </Routes>
      </Router>
  );
}

export default App;
