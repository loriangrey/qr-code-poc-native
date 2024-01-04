import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
