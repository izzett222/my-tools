/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useAsync } from './utils/hooks/useAsync';
import * as auth from "./auth";
import client from './utils/api-client';
import UnauthorizedApp from "./UnauthorizedApp";
import AuthorizedApp from "./authorizedApp";
import { FullPageSpinner } from "./components/lib";
import "@reach/dialog/styles.css";

const getUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const { data } = await client('user', { token });
    user = data;
  }
  return user;
}


function App() {
  const { data: user, run, isLoading, setData, isIdle } = useAsync();

  // get user info and sign them up if they have a valid token
  useEffect(() => {
    run(getUser());
  }, [run])
  const signup = (username, password) => {
    return auth.signup(username, password).then((data) => {
      setData(data)
      return data;
    })
  }
  const login = (username, password) => {
    return auth.login(username, password).then((data) => {
      setData(data)
      return data;
    })
  }
  const logout = () => {
    auth.logout();
    setData(null);
  } 

  if(isLoading || isIdle) return <FullPageSpinner />
  return (user ? <AuthorizedApp user={user} logout={logout} />: <UnauthorizedApp signup={signup} login={login} />);
}

export default App;
