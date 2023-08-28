import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { GeneralObject } from '../../../api-interfaces/src';
import useQueryApi from '../../../query/hooks/src/lib/useQueryApi';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpiry, setTokenExpiry] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [user, setUser] = useState<any>();

  const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null);

  const [isServerCrashed, setServerCrashed] = useState<boolean>(false);

  // axios.get('http://localhost:3333/api/web/csrf-token').then((uniqueId) => {
  //   const header: any = {
  //     'Content-Type': 'application/json',
  //     'X-CSRF-Token': uniqueId.data.csrfToken,
  //   };
  //   console.log(uniqueId.data.csrfToken);

  //   axios.defaults.headers = header;
  // });

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    setToken(null);
    setTokenExpiry(null);
  };

  const login: (
    token: string,
    tokenExpiry: string,
    sessionId: string,
    user: GeneralObject
  ) => void = (_token, _tokenExpiry, _sessionId, _user) => {
    if (
      _token &&
      _tokenExpiry &&
      new Date(_tokenExpiry).getTime() > new Date().getTime() &&
      _sessionId &&
      _user
    ) {
      setToken(_token);
      setTokenExpiry(_tokenExpiry);
      setUser(_user);
      setSessionId(_sessionId);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        sessionId,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
