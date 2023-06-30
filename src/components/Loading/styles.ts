import styled from "styled-components";

export const Container = styled.div`
  color: "#000";
  margin: 0 0;
  position: absolute;
  top: 0%;
  left: 0%;
`;

export const ContainerInitial = styled(Container)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
