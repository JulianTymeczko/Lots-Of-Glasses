import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav.jsx";
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
