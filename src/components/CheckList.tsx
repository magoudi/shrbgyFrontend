import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel, Grid } from "@mui/material";

const CheckList = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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
  } = props.value;
  const error =
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
  return (
    <FormControl error={error}>
      <FormGroup>
        <Grid container spacing={0}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid size={{ xs: 6, md: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Loyalty}
                    onChange={props.onChange}
                    name="Loyalty"
                  />
                }
                label="Loyalty"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Courage}
                    onChange={props.onChange}
                    name="Courage"
                  />
                }
                label="Courage"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Discipline}
                    onChange={props.onChange}
                    name="Discipline"
                  />
                }
                label="Discipline"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Ambition}
                    onChange={props.onChange}
                    name="Ambition"
                  />
                }
                label="Ambition"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Family}
                    onChange={props.onChange}
                    name="Family"
                  />
                }
                label="Family"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Faith}
                    onChange={props.onChange}
                    name="Faith"
                  />
                }
                label="Faith"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Leadership}
                    onChange={props.onChange}
                    name="Leadership"
                  />
                }
                label="Leadership"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Wisdom}
                    onChange={props.onChange}
                    name="Wisdom"
                  />
                }
                label="Wisdom"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 9 }} />
          </Grid>
          <Grid size={{ xs: 6, md: 6 }}>
            <Grid size={{ xs: 6, md: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Integrity}
                    onChange={props.onChange}
                    name="Integrity"
                  />
                }
                label="Integrity"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Creativity}
                    onChange={props.onChange}
                    name="Creativity"
                  />
                }
                label="Creativity"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Freedom}
                    onChange={props.onChange}
                    name="Freedom"
                  />
                }
                label="Freedom"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Kindness}
                    onChange={props.onChange}
                    name="Kindness"
                  />
                }
                label="Kindness"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Honor}
                    onChange={props.onChange}
                    name="Honor"
                  />
                }
                label="Honor"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Justice}
                    onChange={props.onChange}
                    name="Justice"
                  />
                }
                label="Justice"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Curiosity}
                    onChange={props.onChange}
                    name="Curiosity"
                  />
                }
                label="Curiosity"
              />
            </Grid>
            <Grid size={{ xs: 6, md: 9 }} />
          </Grid>
          <Grid size={{ xs: 0, md: 6 }} />
        </Grid>
      </FormGroup>
      {error && <FormLabel>you have a maximum of 5 choices</FormLabel>}
    </FormControl>
  );
};

export default CheckList;
