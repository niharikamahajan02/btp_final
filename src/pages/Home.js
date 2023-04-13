import React,{useState} from "react";
//import  { useState } from 'react';
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bh.jpeg";
import "../styles/HomeStyles.css";

import { ButtonGroup,Stack ,Button} from "@mui/material";



const Home = () => {

 

  return (


    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
        
            <Stack spacing={9} direction='row' marginTop='31px' >
         
           

           <Button variant="outlined" disableElevation>UPLOAD FOOD IMAGE</Button>
         <Link to="/forrecipe"> <Button variant="outlined" disableElevation>SEARCH RECIPE</Button></Link>
         <Link to="/foringre"> <Button variant="outlined" disableElevation>SEARCH MEAL BY INGREDIENTS</Button></Link>

            </Stack>
         
        </div>
      </div>
    </Layout>
  );
};

export default Home;
