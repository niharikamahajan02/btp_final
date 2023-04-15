import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Deep Learning Based Recipe Generation Website</Typography>
        <p>
        A dynamic website comprising deep leaning techniques.<br/><br></br>
          Search options:<br/>
               &nbsp;&nbsp;&nbsp;1.Search by name<br/>
                 &nbsp;&nbsp;&nbsp;2.Search by ingredients<br/>
                 &nbsp;&nbsp;&nbsp;3.Search by image<br/>
                 &nbsp;&nbsp;&nbsp;4.Recipe Generation<br/>

        </p>
        <br />
        <p>
          
        </p>
      </Box>
    </Layout>
  );
};

export default About;
