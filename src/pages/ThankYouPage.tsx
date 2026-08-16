import { Box, styled, Typography } from "@mui/material";
import { Grid } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  borderWidth: 1,
  borderColor: theme.palette.secondary.light,
  borderStyle: "solid",
  padding: "40px",
  background: theme.palette.background.paper,
  boxShadow: `0px 8px 24px ${theme.palette.primary.main}60`,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  "@media only screen and (max-width: 767px)": {
    padding: "20px",
    width: "100%",
  },
}));
const Line = styled(Box)(({ theme }) => ({
  height: "0px",
  width: "200px",
  borderBottom: "1px solid",
  borderColor: theme.palette.secondary.light,
  margin: "20px 0px ",
  "@media only screen and (max-width: 767px)": {
    margin: "10px 0px ",
    width: "100px",
  },
}));

const Circle = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.main}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
}));

const Tick = styled(Box)(({ theme }) => ({
  width: "35px",
  height: "15px",
  borderBottom: "1px solid",
  borderLeft: "1px solid",
  borderColor: theme.palette.primary.main,
  transform: "rotate(-45deg)",
  translate: "0 -4px",
}));

const ThankYouPage = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid size={{ xs: 1, md: 3 }} />
      <Grid
        size={{ xs: 10, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Circle>
              <Tick />
            </Circle>
          </Box>
          <Typography
            color="primary"
            sx={{ fontSize: "0.9", fontWeight: "350" }}
          >
            SUBMISSION COMPLETE
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontFamily: "Cormorant Garamond",
              fontWeight: "bold",
              margin: "20px 0px",
              "@media only screen and (max-width: 767px)": {
                fontSize: "3rem",
              },
            }}
          >
            Thank you!
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              marginBottom: "20px",
              "@media only screen and (max-width: 767px)": {
                fontSize: "1rem",
              },
            }}
          >
            Your details have been received.
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              marginBottom: "10px",
              "@media only screen and (max-width: 767px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            SHRGY is currently in its private soft launch. You'll receive an
            email soon with a personal link to access your portal.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Line />
          </Box>
          <Typography
            sx={{
              fontSize: "1rem",
              marginBottom: "10px",
              "@media only screen and (max-width: 767px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            Please keep an eye on your inbox.
          </Typography>
        </Container>
      </Grid>
      <Grid size={{ xs: 1, md: 3 }} />
    </Grid>
  );
};

export default ThankYouPage;
