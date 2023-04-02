import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bh.jpeg";
import "../styles/HomeStyles.css";
import { ButtonGroup,Stack } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <Stack spacing={9} direction='row' marginTop='31px' >
              
            <button variant="contained" disableElevation>SEARCH YOUR MEAL BY INGREDIENTS</button>
            <button variant="contained" disableElevation>UPLOAD FOOD IMAGE</button>
            <button variant="contained" disableElevation>SEARCH CUISINE</button>
           
            </Stack>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
