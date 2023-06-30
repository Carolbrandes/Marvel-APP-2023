import { Typography } from "@mui/material";

interface IProps {
  text: string;
}

const Title = ({ text }: IProps) => (
  <Typography variant="h6" gutterBottom>
    {text}
  </Typography>
);

export default Title;
