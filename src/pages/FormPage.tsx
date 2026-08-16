import { Grid, TextField, Typography } from "@mui/material";
import Questioncontainer from "../components/Questioncontainer";
import { useState } from "react";
import {
  answersMap,
  form,
  minChars,
  type answersInterface,
  type formInterface,
} from "../constants";
import CheckList from "../components/CheckList.tsx";
import SliderList from "../components/SliderList.tsx";
import ThreeTextFeilds, { type q9 } from "../components/ThreeTextFeilds.tsx";
import { useNavigate } from "react-router-dom";

let i = 0;

const emptyAnswers: answersInterface = {
  q1: "",
  q2: "",
  q3: "",
  q4: {
    Loyalty: false,
    Courage: false,
    Discipline: false,
    Ambition: false,
    Family: false,
    Faith: false,
    Leadership: false,
    Wisdom: false,
    Integrity: false,
    Creativity: false,
    Freedom: false,
    Kindness: false,
    Honor: false,
    Justice: false,
    Curiosity: false,
  },
  q5: "",
  q6: "",
  q7: "",
  q8: {
    Bold: 0,
    Energetic: 0,
    Modern: 0,
    Expressive: 0,
    Emotional: 0,
    Supporter: 0,
    Careful: 0,
  },
  q9: { w1: "", w2: "", w3: "" },
  q10: "",
  q11: "",
  q12: "",
};

interface errorsQ9Interface {
  w1: boolean;
  w2: boolean;
  w3: boolean;
}

const emptyErrors: errorsQ9Interface = {
  w1: false,
  w2: false,
  w3: false,
};
const FormPage = () => {
  const [question, setQuestion] = useState<formInterface>(form[0]);

  const [answers, setAnswers] = useState<answersInterface>(emptyAnswers);

  const [error, setError] = useState<boolean>(false);

  const [errorsQ9, setErrorsQ9] = useState<errorsQ9Interface>(emptyErrors);

  const navigate = useNavigate();

  const {
    Loyalty,
    Courage,
    Discipline,
    Ambition,
    Family,
    Faith,
    Leadership,
    Wisdom,
    Integrity,
    Creativity,
    Freedom,
    Kindness,
    Honor,
    Justice,
    Curiosity,
  } = answers.q4;
  const errorq4 =
    [
      Loyalty,
      Courage,
      Discipline,
      Ambition,
      Family,
      Faith,
      Leadership,
      Wisdom,
      Integrity,
      Creativity,
      Freedom,
      Kindness,
      Honor,
      Justice,
      Curiosity,
    ].filter((v) => v).length > 5;
  const handleChangeq4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({
      ...answers,
      q4: {
        ...answers.q4,
        [event.target.name]: event.target.checked,
      },
    });
  };
  const handleChangeq8 = (event: Event, value: number | number[]) => {
    const name = (event.target as HTMLInputElement)
      .name as keyof answersInterface["q8"];
    const sliderValue = Array.isArray(value) ? value[0] : value;

    setAnswers({
      ...answers,
      q8: {
        ...answers.q8,
        [name]: sliderValue,
      },
    });
  };
  const handleChangeq9 = (updatedQ9: q9) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      q9: updatedQ9,
    }));

    setErrorsQ9((previousErrors) => ({
      w1: previousErrors.w1 && updatedQ9.w1.trim().length === 0,
      w2: previousErrors.w2 && updatedQ9.w2.trim().length === 0,
      w3: previousErrors.w3 && updatedQ9.w3.trim().length === 0,
    }));
  };
  const nextQuestion = () => {
    if (question.index == 4 && errorq4) {
      return;
    }
    if (typeof answers[answersMap[i] as keyof answersInterface] === "string") {
      if (
        (answers[answersMap[i] as keyof answersInterface] as string).length <
        minChars[i]
      ) {
        setError(true);
        return;
      }
    }
    if (question.index === 9) {
      const newErrors = {
        w1: answers.q9.w1.trim().length === 0,
        w2: answers.q9.w2.trim().length === 0,
        w3: answers.q9.w3.trim().length === 0,
      };

      setErrorsQ9(newErrors);

      if (newErrors.w1 || newErrors.w2 || newErrors.w3) {
        return;
      }
    }
    if (question.index == form.length) {
      navigate("/thankyou");
      return;
    }
    i++;
    setQuestion(form[i]);
    setError(false);
    setErrorsQ9(emptyErrors);
  };
  const back = () => {
    if (i == 0) return;
    i--;
    setQuestion(form[i]);
  };
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        overflow: "hidden",
        background: `
            radial-gradient(ellipse at 20% 35%, rgba(252, 250, 132, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 65%, rgba(250, 247, 96, 0.04) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(45, 45, 27, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.35) 100%),
            #08060d
          `,
      }}
    >
      <Grid size={{ xs: 1, md: 3 }} />
      <Grid
        size={{ xs: 10, md: 6 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Questioncontainer
          index={question.index}
          section={question.section}
          question={question.question}
          description={question.description}
          helper={question.helper}
          nextQuestion={nextQuestion}
          back={back}
        >
          {question.index == 4 ? (
            <CheckList value={answers.q4} onChange={handleChangeq4} />
          ) : question.index == 8 ? (
            <SliderList value={answers.q8} onChange={handleChangeq8} />
          ) : question.index == 9 ? (
            <ThreeTextFeilds
              answers={answers.q9}
              setAnswers={handleChangeq9}
              errors={errorsQ9}
            />
          ) : (
            <>
              <TextField
                multiline
                placeholder=""
                variant="outlined"
                fullWidth
                rows={5}
                value={answers[answersMap[i] as keyof answersInterface]}
                onChange={(e) => {
                  setAnswers({
                    ...answers,
                    [answersMap[i] as keyof answersInterface]: e.target.value,
                  });
                  if (
                    (answers[answersMap[i] as keyof answersInterface] as string)
                      .length >=
                    minChars[i] - 1
                  ) {
                    setError(false);
                  }
                }}
                error={error}
                helperText={
                  (answers[answersMap[i] as keyof answersInterface] as string)
                    .length > 0
                    ? (
                        answers[
                          answersMap[i] as keyof answersInterface
                        ] as string
                      ).length
                    : undefined
                }
                sx={{
                  "& .MuiFormHelperText-root": {
                    textAlign: "right",
                    marginRight: 0,
                  },
                }}
              />
              {error &&
                ((minChars[i] as number) > 1 ? (
                  <Typography color="error">
                    minumum {minChars[i]} characters
                  </Typography>
                ) : (
                  <Typography color="error">
                    Please write your answer
                  </Typography>
                ))}
            </>
          )}
        </Questioncontainer>
      </Grid>
      <Grid size={{ xs: 1, md: 3 }} />
    </Grid>
  );
};

export default FormPage;
