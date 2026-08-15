import { Box, TextField } from "@mui/material";

export interface q9 {
  w1: string;
  w2: string;
  w3: string;
}

interface ThreeTextFieldsProps {
  answers: q9;
  setAnswers: (answers: q9) => void;
  errors: Record<keyof q9, boolean>;
}

const ThreeTextFeilds = ({
  answers,
  setAnswers,
  errors,
}: ThreeTextFieldsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof q9;
    const value = event.target.value;

    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TextField
        fullWidth
        name="w1"
        value={answers.w1}
        onChange={handleChange}
        error={errors.w1}
        helperText={errors.w1 ? "Please write your answer" : undefined}
      />

      <TextField
        fullWidth
        name="w2"
        value={answers.w2}
        onChange={handleChange}
        error={errors.w2}
        helperText={errors.w2 ? "Please write your answer" : undefined}
      />

      <TextField
        fullWidth
        name="w3"
        value={answers.w3}
        onChange={handleChange}
        error={errors.w3}
        helperText={errors.w3 ? "Please write your answer" : undefined}
      />
      
    </Box>
  );
};

export default ThreeTextFeilds;
