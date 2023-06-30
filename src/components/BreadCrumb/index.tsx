import { Link } from "react-router-dom";
import * as S from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import { Typography } from "@mui/material";

interface IRoutes {
  path: string;
  label: string;
}

interface IProps {
  routes?: IRoutes[];
  isNotFound?: boolean;
}

const Breadcrumb = ({ routes, isNotFound }: IProps) => {
  return (
    <S.Container isNotFound={isNotFound} data-component="breadcrumb-Container">
      <S.StyledBreadcrumb data-component="breadcrumb-StyledBreadcrumb">
        <HomeIcon fontSize="small" />
        <Typography variant="body1">
          <Link to="/">Home</Link>
        </Typography>
      </S.StyledBreadcrumb>

      {routes?.length
        ? routes?.map((route: IRoutes) => (
            <>
              <span>/</span>
              <S.StyledBreadcrumb>
                <Link to={`${route?.path}`}>{route?.label}</Link>
              </S.StyledBreadcrumb>
            </>
          ))
        : false}
    </S.Container>
  );
};

export default Breadcrumb;
