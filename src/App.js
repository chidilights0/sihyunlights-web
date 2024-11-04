import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import Projects from './pages/Projects';
import History from './pages/History';

import './App.css';
import Transition from './components/Transition';
import { AnimatePresence } from 'framer-motion';
import { HeaderProvider } from './components/HeaderContext';

function App() {
  return (
      <Router>
        <HeaderProvider>
        <Header/>
        <AnimatePresence>
        <Routes>
          <Route path='/' element={<Transition><Main/></Transition>}/>
          <Route path='projects' element={<Transition><Projects/></Transition>}/>
          <Route path='history' element={<Transition><History/></Transition>}/>
        </Routes>
        </AnimatePresence>
        </HeaderProvider>
        <Footer/>
      </Router>
  );
}

export default App;
