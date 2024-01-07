import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scanner from "./components/Qr/Qr";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Scanner />} />
        <Route exact path="/product-detail" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
