import { Box, Slider, Typography } from "@mui/material";

const SliderList = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number,
  ) => void;
}) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Reserved</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Bold</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        name="Bold"
        min={-10}
        max={10}
        value={props.value.Bold}
        onChange={props.onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Calm</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Energetic</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        name="Energetic"
        min={-10}
        max={10}
        value={props.value.Energetic}
        onChange={props.onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Traditional</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Modern</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        min={-10}
        max={10}
        name="Modern"
        value={props.value.Modern}
        onChange={props.onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Minimalist</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Expressive</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        min={-10}
        max={10}
        name="Expressive"
        value={props.value.Expressive}
        onChange={props.onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Logical</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Emotional</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        min={-10}
        max={10}
        name="Emotional"
        value={props.value.Emotional}
        onChange={props.onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Leader</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Supporter</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        min={-10}
        max={10}
        name="Supporter"
        value={props.value.Supporter}
        onChange={props.onChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "0.8rem" }}>Adventurous</Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>Careful</Typography>
      </Box>
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        min={-10}
        max={10}
        name="Careful"
        value={props.value.Careful}
        onChange={props.onChange}
      />
    </>
  );
};

export default SliderList;
