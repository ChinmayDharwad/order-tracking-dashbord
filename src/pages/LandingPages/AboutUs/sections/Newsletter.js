/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "pages/components/MKBox";
import MKTypography from "pages/components/MKTypography";
import MKInput from "pages/components/MKInput";
import MKButton from "pages/components/MKButton";

function ContactUs() {
  return (
    <MKBox component="section" pt={6} my={6} bgcolor="background.paper">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <MKTypography variant="h4">Get in Touch</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Have questions or need assistance with your logistics needs? Reach out to us, and our
              team will be happy to help.
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MKInput type="text" label="Full Name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <MKInput type="email" label="Email Address" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <MKInput type="text" label="Subject" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <MKInput type="text" label="Message" multiline rows={4} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <MKButton variant="gradient" color="info">
                  Submit
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKTypography variant="h5">Contact Details</MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              <strong>Address:</strong> 123 Logistics Lane, Shipping City, 12345
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              <strong>Phone:</strong> (123) 456-7890
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              <strong>Email:</strong> support@logisticscompany.com
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactUs;
