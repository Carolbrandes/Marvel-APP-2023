import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const BoxContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const WrapperIconSearch = styled.div`
  position: absolute;
  left: 0;
  top: 15px;
`;

export const Input = styled(TextField)`
  input,
  label {
    padding-left: 30px;
  }
`;
