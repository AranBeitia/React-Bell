import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as routes from "../../../constants/routes";
import withHeader from "../../../hoc/withHeader";
import LoginStyle from "./LoginPage.style";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useAuth } from "../../../context/Auth/reducer";

import Card from "react-bootstrap/Card";
function LoginPage() {
  const { login, isAuth, handleChange, user } = useAuth();
  console.log(user);
  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   lastName: "",
  //   email: "",
  // });

  if (isAuth) {
    return <Redirect to={routes.HOME} />;
  }
  // const handleChange = (e) => {
  //   setFormValues((prevState) => {
  //     return {
  //       ...prevState,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  return (
    <LoginStyle>
      <Card>
        <h1>login page</h1>
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            login(user);
          }}
        >
          <InputGroup className="mb-3">
            <FormControl
              placeholder="name"
              aria-label="name"
              name="name"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="last name"
              aria-label="lastName"
              name="lastName"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="email"
              aria-label="email"
              name="email"
              onChange={handleChange}
            />
          </InputGroup>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </LoginStyle>
  );
}
export default withHeader(LoginPage);
