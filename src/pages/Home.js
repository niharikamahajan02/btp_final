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
          <br></br>
          <br></br>
          <br></br>
          <h1>Receta</h1>
          <p>Make magic with what you have</p>
        
            <Stack spacing={9} direction='row' marginTop='31px' >
         
<<<<<<< HEAD
           

           
         <Link to="/forrecipe"> <Button variant="outlined" disableElevation>BY NAME</Button></Link>
         <Button variant="outlined" disableElevation>BY FOOD IMAGE</Button>
         <Link to="/foringre"> <Button variant="outlined" disableElevation>BY INGREDIENTS</Button></Link>
=======
           

           <Button variant="outlined" disableElevation>UPLOAD FOOD IMAGE</Button>
         <Link to="/forrecipe"> <Button variant="outlined" disableElevation>SEARCH RECIPE</Button></Link>
         <Link to="/foringre"> <Button variant="outlined" disableElevation>SEARCH MEAL BY INGREDIENTS</Button></Link>
>>>>>>> c7f3f72cd05db9bbcf52c73bc37aa9c465b839ed

            </Stack>
         
        </div>
      </div>
    </Layout>
  );
};

export default Home;
