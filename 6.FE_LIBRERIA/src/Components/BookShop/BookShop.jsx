import Navbar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Books.jsx";
const BookShop = () => {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/" element={<p>coomponente2</p>} />
            <Route path="/contacto" element={<p>coomponente3</p>} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default BookShop;
