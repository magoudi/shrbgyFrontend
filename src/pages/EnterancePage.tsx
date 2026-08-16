import {
  Box,
  Button,
  Fade,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Grid, useMediaQuery } from "@mui/system";
import { Form, Formik } from "formik";
import { customerInfoSchema } from "../constants";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  borderWidth: 1,
  borderColor: theme.palette.secondary.light,
  borderStyle: "solid",
  padding: "40px",
  background: theme.palette.background.paper,
  boxShadow: `0px 8px 24px ${theme.palette.primary.main}60`,
  margin: "50px 0",
  "@media only screen and (max-width: 767px)": {
    padding: "20px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Line = styled(Box)(({ theme }) => ({
  height: "0px",
  width: "40px",
  borderBottom: "1px solid",
  borderColor: theme.palette.secondary.light,
  margin: "20px 0px ",
  "@media only screen and (max-width: 767px)": { margin: "10px 0px " },
}));

const LogoXShrbgy = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isMobile ? (
        <img src={Logo} alt="SHRBGY logo" width={200} height={200} />
      ) : (
        <img src={Logo} alt="SHRBGY logo" width={300} height={300} />
      )}

      {isMobile ? (
        <Typography
          color="primary"
          variant="h2"
          sx={{ fontFamily: "logoFont", fontWeight: "bold" }}
        >
          SHRBGY
        </Typography>
      ) : (
        <Typography
          color="primary"
          variant="h1"
          sx={{ fontFamily: "logoFont", fontWeight: "bold" }}
        >
          SHRBGY
        </Typography>
      )}
    </Box>
  );
};

const NextComponent = (props: { setNextPage: () => void }) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
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
          <Typography color="primary" sx={{ fontSize: "1rem" }}>
            The Design Interview
          </Typography>
          {isMobile ? (
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
          ) : (
            <Line />
          )}

          <Typography
            variant="h4"
            sx={{
              fontFamily: "Cormorant Garamond",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
              "@media only screen and (max-width: 767px)": {
                marginBottom: "10px",
                fontSize: "1.2rem",
              },
            }}
          >
            Before you begin.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              marginBottom: "20px",
              "@media only screen and (max-width: 767px)": {
                marginBottom: "10px",
                fontSize: "1rem",
              },
            }}
          >
            Pause for a moment
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              marginBottom: "40px",

              "@media only screen and (max-width: 767px)": {
                marginBottom: "15px",

                fontSize: "1rem",
              },
            }}
          >
            put aside expectations, titles, and achievements. Think about the
            moments that defined you, the people you'd protect ,the values you'd
            never compromise, and the person you're becoming.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              "@media only screen and (max-width: 767px)": {
                fontSize: "1rem",
              },
            }}
          >
            Don't answer with what sounds impressive.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              "@media only screen and (max-width: 767px)": {
                fontSize: "1rem",
              },
            }}
          >
            Answer with what feels true.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              marginBottom: "10px",
              "@media only screen and (max-width: 767px)": {
                fontSize: "1rem",
              },
            }}
          >
            That's where the most meaningful design begin.
          </Typography>
          <Box
            sx={{
              textAlign: "right",
              "@media only screen and (max-width: 767px)": {
                textAlign: "center",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{ borderRadius: 0, marginTop: "20px" }}
              onClick={props.setNextPage}
            >
              <Typography
                variant="h5"
                sx={{
                  margin: "0 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "@media only screen and (max-width: 767px)": {
                    fontSize: "1rem",
                    margin: "0 10px",
                  },
                }}
              >
                BEGIN
              </Typography>
            </Button>
          </Box>
        </Container>
      </Grid>
      <Grid size={{ xs: 1, md: 3 }} />
    </Grid>
  );
};

interface customerInfo {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
}

const GetInfo = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const navigate = useNavigate();
  return (
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
          <Typography color="primary" sx={{ fontSize: "1rem" }}>
            The Design Interview
          </Typography>
          {isMobile ? (
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
          ) : (
            <Line />
          )}

          <Typography
            variant="h4"
            sx={{
              fontFamily: "Cormorant Garamond",
              fontWeight: "bold",
              color: "white",
              "@media only screen and (max-width: 767px)": {
                fontSize: "1rem",
              },
            }}
          >
            Let's get to know you.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond",
              "@media only screen and (max-width: 767px)": {
                fontSize: "1rem",
              },
            }}
          >
            A few details before we start.
          </Typography>
          <Formik<customerInfo>
            initialValues={{
              fullName: "",
              emailAddress: "",
              phoneNumber: "",
            }}
            validationSchema={customerInfoSchema}
            onSubmit={(values) => {
              console.log(values);
              navigate("/form");
            }}
          >
            {(props) => (
              <Form>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="FULL NAME"
                  name="fullName"
                  value={props.values.fullName}
                  onChange={props.handleChange}
                  error={Boolean(
                    props.errors.fullName && props.touched.fullName,
                  )}
                  helperText={
                    props.touched.fullName ? props.errors.fullName : ""
                  }
                  sx={{ margin: "20px 0px" }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  label="EMAIL ADDRESS"
                  name="emailAddress"
                  value={props.values.emailAddress}
                  onChange={props.handleChange}
                  error={Boolean(
                    props.errors.emailAddress && props.touched.emailAddress,
                  )}
                  helperText={
                    props.touched.emailAddress ? props.errors.emailAddress : ""
                  }
                  sx={{ margin: "20px 0px" }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  label="PHONE NUMBER"
                  name="phoneNumber"
                  value={props.values.phoneNumber}
                  onChange={props.handleChange}
                  error={Boolean(
                    props.errors.phoneNumber && props.touched.phoneNumber,
                  )}
                  helperText={
                    props.touched.phoneNumber ? props.errors.phoneNumber : ""
                  }
                  sx={{ margin: "20px 0px" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: "20px", borderRadius: 0 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      margin: "0 20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "@media only screen and (max-width: 767px)": {
                        fontSize: "1rem",
                        margin: "0 10px",
                      },
                    }}
                  >
                    NEXT <ArrowForward />
                  </Typography>
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Grid>
      <Grid size={{ xs: 1, md: 3 }} />
    </Grid>
  );
};

const EnterancePage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showNextComponent, setShowNextComponent] = useState(false);
  const [showGetInfo, setShowGetInfo] = useState(false);
  const setNextPage = () => {
    setShowNextComponent(false);
    setShowGetInfo(true);
  };

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    const fadeInTimer = setTimeout(() => {
      setShowNextComponent(true);
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(fadeInTimer);
    };
  }, []);

  return (
    <Box
      className="app-page"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: 0,
      }}
    >
      <Fade in={showLogo} timeout={1000} unmountOnExit>
        <Box
          sx={{
            position: "absolute",
            top: "env(safe-area-inset-top, 0px)",
            right: "env(safe-area-inset-right, 0px)",
            bottom: "env(safe-area-inset-bottom, 0px)",
            left: "env(safe-area-inset-left, 0px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoXShrbgy />
        </Box>
      </Fade>

      <Fade in={showNextComponent} timeout={1000}>
        <Box
          sx={{
            position: "absolute",
            top: "env(safe-area-inset-top, 0px)",
            right: "env(safe-area-inset-right, 0px)",
            bottom: "env(safe-area-inset-bottom, 0px)",
            left: "env(safe-area-inset-left, 0px)",
            overflowX: "hidden",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <NextComponent setNextPage={setNextPage} />
        </Box>
      </Fade>

      <Fade in={showGetInfo} timeout={1000}>
        <Box
          sx={{
            position: "absolute",
            top: "env(safe-area-inset-top, 0px)",
            right: "env(safe-area-inset-right, 0px)",
            bottom: "env(safe-area-inset-bottom, 0px)",
            left: "env(safe-area-inset-left, 0px)",
            overflowX: "hidden",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <GetInfo />
        </Box>
      </Fade>
    </Box>
  );
};

export default EnterancePage;
