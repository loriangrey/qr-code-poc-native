import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";
import Glossary from "./components/Glossary/Glossary";
// import Scanner from "./components/Qr/Qr";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/*<Route exact path="/" element={<Scanner />} />*/}
          <Route exact path="/:ean" element={<ProductDetails />} />
          <Route exact path="/glossary" element={<Glossary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
