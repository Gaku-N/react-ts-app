import { useContext } from "react";
import { LoginUserContext } from "../../providers/UserProvider";

export const Home = () => {
  const {loginUser, setLoginUser} = useContext(LoginUserContext);
  console.log ('loginuser', loginUser)
  return <div>このページはHomeです</div>;
};
