import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from 'react';

export const UserContext = createContext({});

type Props = {
  children: ReactNode;
}

type LoginUser = { isAdmin: boolean };

type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const UserProvider: FC<Props> = (props) => {
  const {children} = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  const contextName = '名前'
  return (
    <UserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </UserContext.Provider>
  )
}