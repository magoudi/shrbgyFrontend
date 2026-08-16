import { Box, styled, Typography } from "@mui/material";
import { Grid } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  borderWidth: 1,
  borderColor: theme.palette.secondary.light,
  borderStyle: "solid",
  padding: "40px",
  margin: "50px 0",
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
    <Box
      sx={{
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        width: "100%",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        overflowX: "hidden",
        background: `
          radial-gradient(ellipse at 20% 35%, rgba(252, 250, 132, 0.06) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 65%, rgba(250, 247, 96, 0.04) 0%, transparent 55%),
          radial-gradient(ellipse at 50% 50%, rgba(45, 45, 27, 0.4) 0%, transparent 70%),
          radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.35) 100%),
          #08060d
        `,
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100%",
          width: "100%",
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
    </Box>
  );
};

export default ThankYouPage;
