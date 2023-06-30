import styled from 'styled-components'

export const Container = styled.div<{ isNotFound?: boolean }>`
  position: ${(props) => (props.isNotFound ? '' : 'absolute')};
  left: ${(props) => (props.isNotFound ? '' : '10vw')};
  top: ${(props) => (props.isNotFound ? '' : '5vh')};
  display: flex;

  span {
    margin-inline: 10px;
    font-size: 30px;
  }
`

export const StyledBreadcrumb = styled.div`
  border-radius: 16px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-inline: 10px;
  height: 40px;

  a {
    text-decoration: none;
    color: #000;
    margin-left: 5px;
  }
`
