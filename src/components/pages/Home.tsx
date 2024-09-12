import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Home = () => {
  const context = useContext(UserContext)
  return <p>このページはHomeです</p>;
};
