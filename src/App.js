import { HashRouter as MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Projects from "./pages/Projects";
import History from "./pages/History";

import "./App.css";
import Transition from "./components/Transition";
import { AnimatePresence } from "framer-motion";
import { HeaderProvider } from "./components/HeaderContext";

function App() {
  return (
    <MemoryRouter>
      <HeaderProvider>
        <Header />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <Transition>
                  <Main />
                </Transition>
              }
            />
            <Route
              path="/projects"
              element={
                <Transition>
                  <Projects />
                </Transition>
              }
            />
            <Route
              path="/history"
              element={
                <Transition>
                  <History />
                </Transition>
              }
            />
          </Routes>
        </AnimatePresence>
      </HeaderProvider>
      <Footer />
    </MemoryRouter>
  );
}

export default App;