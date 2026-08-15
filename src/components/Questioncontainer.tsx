import { Box, Button, LinearProgress, styled, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { form } from "../constants";

const Container = styled(Box)(({ theme }) => ({
  width: "80%",
  borderWidth: 1,
  borderColor: theme.palette.secondary.light,
  borderStyle: "solid",
  padding: "40px",
  background: theme.palette.background.paper,
  boxShadow: `0px 8px 24px ${theme.palette.primary.main}60`,
}));

const Section = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  textAlign: "center",
  marginBottom: "40px",
}));

const Questioncontainer = (props: {
  index: number;
  question: string;
  description?: string;
  helper?: string;
  section: number;
  children: React.ReactNode;
  nextQuestion(): void;
  back(): void;
}) => {
  return (
    <Container>
      <Typography>
        <strong>{props.index}</strong> / {form.length}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(props.index * 100) / form.length}
        sx={{ width: "35%", borderRadius: "5px", margin: "10px 0" }}
      />
      <Section>
        {props.section == 1
          ? "SECTION I — YOUR STORY"
          : props.section == 2
            ? "SECTION II — WHAT DEFINES YOU"
            : props.section == 3
              ? "SECTION III — YOUR PERSONALITY"
              : props.section == 4 && "SECTION IV — Looking Forward"}
      </Section>

      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
          "& span": {
            color: "secondary.main",
            fontWeight: "800",
            fontFamily: "Bodoni Moda",
          },
          fontSize: "1.5em",
          fontWeight: "800",
          fontFamily: "Cormorant Garamond",
        }}
      >
        <span>{props.index}.</span>
        {props.question}
      </Typography>
      <Box sx={{ margin: "20px 40px 60px 40px" }}>
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", fontFamily: "Cormorant Garamond" }}
        >
          {props.description}
        </Typography>
        {props.helper && (
          <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
            {props.helper}
          </Typography>
        )}
      </Box>
      {props.children}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        {props.index != 1 ? (
          <Button
            variant="text"
            sx={{ color: "text.secondary", borderRadius: 0 }}
            onClick={props.back}
          >
            <Typography
              sx={{
                margin: "0 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Previous
            </Typography>
          </Button>
        ) : (
          <p></p>
        )}

        {props.index == form.length ? (
          <Button
            variant="contained"
            sx={{ borderRadius: 0 }}
            onClick={props.nextQuestion}
          >
            <Typography
              sx={{
                margin: "0 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media only screen and (max-width: 767px)": {
                  margin: "0 10px",
                  fontSize: "1rem",
                },
              }}
            >
              SUBMIT
            </Typography>
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ borderRadius: 0 }}
            onClick={props.nextQuestion}
          >
            <Typography
              sx={{
                margin: "0 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media only screen and (max-width: 767px)": {
                  margin: "0 10px",
                  fontSize: "1rem",
                },
              }}
            >
              Next <ArrowForwardIcon />
            </Typography>
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Questioncontainer;
