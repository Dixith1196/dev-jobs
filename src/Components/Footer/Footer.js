import React, { Component } from "react";

import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
const FooterContainer = styled.div`
  text-align: center;
//   position: absolute;

  bottom: 0;
  width: 100% !important;
  height: 100px !important ;
  background: white;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div style={{display: "flex", justifyContent:"space-between"}}>
        <div>
        <Typography component="h5" variant="h5">
            So Digital lnc.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            sodigital.co
          </Typography>
          </div>
        {/* <div className="site-button" > */}
        <div style={{display: "flex", justifyContent:"space-between"}}>
      <Button  className="search-button" variant="contained" color="primary" style={{fontWeight: "bolder", margin:"10px"}}>
        Apply Now
    </Button>
    </div>
      {/* </div> */}
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;