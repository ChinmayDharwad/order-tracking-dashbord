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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Meet Our Leadership Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Driven by passion and dedication, our team is the backbone of our success. Their
              expertise and commitment ensure we deliver excellence every step of the way.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Sophia Johnson"
                position={{ color: "info", label: "Chief Executive Officer" }}
                description="With over 15 years in the logistics industry, Sophia's vision and leadership have been pivotal in our growth and success"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="James Wilson"
                position={{ color: "info", label: "Chief Operations Officer" }}
                description="James ensures our operations run smoothly and efficiently, always prioritizing customer satisfaction"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Olivia Smith"
                position={{ color: "info", label: "Head Of Marketing" }}
                description="Olivia's innovative strategies have played a key role in establishing our brand's presence in the market"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Liam Brown"
                position={{ color: "info", label: "Tech Lead" }}
                description="Liam spearheads our tech initiatives, ensuring we leverage the latest technologies to enhance our services"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
