import React from "react";
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
         
            <Button variant="outlined"><a href="/index_2.html" class='nptc'>BY INGREDIENTS</a></Button>
          

            <Button variant="outlined" disableElevation>BY FOOD IMAGE</Button>
            <Button variant="outlined" disableElevation><a href="/index_copy.html" class='nptc'>BY CUISINE</a></Button>
           
            </Stack>
         
        </div>
      </div>
    </Layout>
  );
};

export default Home;
