import CircularProgress from "@mui/material/CircularProgress";
import * as S from "./styles";

const Loading = () => (
  <S.Container data-component="loading-Container">
    <CircularProgress size={60} color="inherit" />
  </S.Container>
);

export default Loading;
