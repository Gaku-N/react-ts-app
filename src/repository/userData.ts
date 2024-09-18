import axios, {} from 'axios';
import { useCallback, useState } from 'react';

export const userData = async () => {
  // const [users, setUsers] = useState<Array<any>>([]);

const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
// console.log(res);
// for (const user of res.data) {
//   console.log(user);
// }
return (res.data as any)
// console.log(users);
  
  // const getUsers = useCallback(() =>{
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then(res=> console.log(res.data))
  //   // .catch(() => console.log({titele:"ユーザー取得に失敗しました", status: "error"}))
  //   // .finally(() => console.log('finally'));
  // }, []);
  // console.log('ユーザー情報', getUsers);
};
