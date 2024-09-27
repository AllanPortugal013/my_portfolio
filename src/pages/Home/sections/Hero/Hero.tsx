import { Box, Container, Typography, styled } from "@mui/material"
import Grid from "@mui/material/Grid2"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import avatar from "../../../../assets/images/avatar.jpg"
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyleHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyleImg = styled("img")(({theme}) => ({
        width: "90%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))
   
    return (
      <>
        <StyleHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box position={"relative"}>
                  <Box
                    position={"absolute"}
                    width={"150%"}
                    top={-100}
                    right={0}
                  >
                    <AnimatedBackground />
                  </Box>
                  <Box position={"relative"} textAlign={"center"}>
                    <StyleImg src={avatar} />
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign={"center"}
                  paddingBottom={2}
                >
                  Allan Portugal
                </Typography>
                <Typography
                  color="primary.contrastText"
                  variant="h2"
                  textAlign={"center"}
                >
                  I'm a Seftware Engineer
                </Typography>
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"center"}
                  spacing={3}
                  paddingTop={3}
                >
                  <Grid
                    size={{ xs: 12, md: 5 }}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <StyledButton>
                      <DownloadIcon />
                      <Typography>--Download cv--</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid
                    size={{ xs: 12, md: 5 }}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <StyledButton>
                      <MailOutlineIcon />
                      <Typography>--Contact me--</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyleHero>
      </>
    );
  }
  
  export default Hero
  