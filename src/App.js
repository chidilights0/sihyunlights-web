import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
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
        <ContentWithTransition />
        <Footer />
      </HeaderProvider>
    </MemoryRouter>
  );
}

function ContentWithTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
  );
}

export default App;