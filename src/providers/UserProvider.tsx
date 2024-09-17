import userEvent from '@testing-library/user-event';
import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from 'react';
import { User } from '../types/user';


type Props = {
  children: ReactNode;
}
type LoginUser = User & { isAdmin: boolean };

type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);


export const UserProvider: FC<Props> = (props) => {
  const {children} = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>({globalId:'01234567', name:'NAME', email:'aaa@hosiden.com', isAdmin: false});
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}