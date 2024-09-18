import { forEachChild } from "typescript";
import { userData } from "../../repository/userData";

export const ViewList = async () => {
  const list = await userData();
  return (<>
    {
      (() => {
        for (const item of list) {
          <p>item</p>
        }
      })
    }
  </>);
}