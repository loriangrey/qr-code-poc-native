import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Assuming you are using React Router
import "./Glossary.scss";
import BackArrow from "../Icons/BackArrow";
const Glossary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="arrow-icon" onClick={handleClick}>
          <BackArrow />
        </div>
        <h1>Glossary</h1>
      </nav>

      <div>
        <>
          {state?.map((item, i) => (
            <div className="gloassary-list-container" key={i}>
              <h3>GHG Footprint</h3>
              <p>{item.glossary.ghg_footprint}</p>
              <hr />
              <h3>Ingredients GHG Footprint</h3>
              <p>{item.glossary.ingredients_ghg_footprint}</p>
              <hr />
              <h3>Packaging GHG Footprint</h3>
              <p>{item.glossary.packaging_ghg_footprint}</p>
              <hr />
              <h3>Recycled Plastic</h3>
              <p>{item.glossary.recycled_plastic}</p>
              <hr />
              <h3>Sustainably Sourced Material</h3>
              <p>{item.glossary.sustainably_sourced_material}</p>
              <hr />
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Glossary;
