import styled from "styled-components";

export const Container = styled.div<{ isHeroPage?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isHeroPage ? "flex-start" : "center")};
  justify-content: center;
  margin-top: ${(props) => (props.isHeroPage ? "150px" : 0)};

  @media screen and (min-width: 1200px) {
    flex-direction: ${(props) => (props.isHeroPage ? "row" : "column")};
  }
`;

export const Content = styled.div<{ isHeroPage?: boolean }>`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1200px) {
    margin-right: ${(props) => (props.isHeroPage ? "40px" : 0)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const WrapperImage = styled.div`
  width: 250px;
  height: 250px;
  border: 3px solid #333232;
  margin-bottom: 7px;
`;
