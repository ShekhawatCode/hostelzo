import { createContext } from 'react';
import { GeneralObject } from '../../../api-interfaces/src';

interface AuthContextInterface {
  token: string | null;
  isLoggedIn: boolean | null;
  sessionId: string;
  logout: () => void;
  login: (
    token: string,
    tokenExpiry: string,
    sessionId: string,
    user: GeneralObject
  ) => void;
}

const AuthContext = createContext<AuthContextInterface>({
  token: null,
  isLoggedIn: null,
  sessionId: '',
  logout: () => {},
  login: () => {},
});

export default AuthContext;
