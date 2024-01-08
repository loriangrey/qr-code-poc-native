import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import "./App.scss";
import "./index.scss";
import Glossary from "./components/Glossary/Glossary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductDetails />} />
          <Route exact path="/glossary" element={<Glossary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
