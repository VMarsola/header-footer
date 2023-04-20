import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Login: FC = () => {
  return (
    <Container>
      Login
      <Link to={"/home"}>Clicke me and check out our Home Page!</Link>
    </Container>
  );
};

export default Login;
