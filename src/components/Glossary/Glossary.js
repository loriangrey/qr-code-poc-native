import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Api from "../lib/Api";
import "./Glossary.scss";
const Glossary = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <>
      <nav className="nav-bar">
        <IconButton className="arrow-icon" onClick={handleClick}>
          <ArrowBackIcon />
        </IconButton>
        <h1>GLOSSARY</h1>
      </nav>

      <div>
        <Api />
      </div>
    </>
  );
};

export default Glossary;
