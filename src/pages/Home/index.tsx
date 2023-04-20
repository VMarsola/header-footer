import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={"/login"}>Get back to login</Link>
    </>
  );
};

export default Home;
