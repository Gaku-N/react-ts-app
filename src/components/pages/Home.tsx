import { memo, useContext } from "react";

import { LoginUserContext } from "../../providers/UserProvider";
// import { getPrintData } from "../../repository/printDataRepo";
import { userData } from "../../repository/userData";
import { ViewList } from "../organisms/ViewList";

export const Home = () => {
  const {loginUser, setLoginUser} = useContext(LoginUserContext);
  console.log ('loginuser', loginUser);
  // getPrintData();
  // const users = readData();

  return (<>
    <div>このページはHomeです</div>
    {/* <ViewList></ViewList> */}
    </>)
};

const readData = async () => {
  const users = await userData();
  for (const user of users){
    console.log ('user', user);
  }
  return users;
}
