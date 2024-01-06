import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scanner from "./components/lib/Qr";
import ProductDetails from "./components/ProductDetails";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/product-detail" element={<ProductDetails />} />
        <Route exact path="/" element={<Scanner />} />
      </Routes>
    </Router>
  );
}

export default App;
