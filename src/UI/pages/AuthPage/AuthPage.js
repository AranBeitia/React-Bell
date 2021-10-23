import React from "react";
import { Redirect } from "react-router-dom";
import * as routes from "../../../constants/routes";
import withHeader from "../../../hoc/withHeader";
import AuthStyle from "./AuthPage.style";
import Login from "../../components/Login";
import InputGroup from "react-bootstrap/InputGroup";

import { useAuth } from "../../../context/Auth/reducer";

function AuthPage() {
  const { isAuth, isLogged, setAgree, agree, setIsLogged } = useAuth();

  if (isAuth) {
    return <Redirect to={routes.HOME} />;
  }

  return (
    <AuthStyle>
      {isLogged ? (
        <Login
          title="Register"
          subtitle={
            <p onClick={setIsLogged}>Are you registered?, click to Login :)</p>
          }
        />
      ) : (
        <Login
          title="Login"
          subtitle={
            <InputGroup className="mb-3">
              <input
                type="checkbox"
                name="agree"
                onChange={setAgree}
                value={agree}
              />
              <label htmlFor="agree">
                <div>Click here to show that you are not a robot :)</div>
              </label>
            </InputGroup>
          }
        />
      )}
    </AuthStyle>
  );
}
export default withHeader(AuthPage);
