import React from "react";
import { Redirect } from "react-router-dom";
import * as routes from "../../../constants/routes";
import withHeader from "../../../hoc/withHeader";
import LoginStyle from "./LoginPage.style";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useAuth } from "../../../context/Auth/reducer";
import { useFormik } from "formik";

import Card from "react-bootstrap/Card";
function LoginPage() {
  const { login, isAuth } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
    },
  });
  const { values, handleChange } = formik;

  if (isAuth) {
    return <Redirect to={routes.HOME} />;
  }

  return (
    <LoginStyle>
      <Card>
        <h1>login page</h1>
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            login(values);
          }}
        >
          <InputGroup className="mb-3">
            <FormControl
              placeholder="name"
              aria-label="name"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="lastname"
              aria-label="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="email"
              aria-label="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
          </InputGroup>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </LoginStyle>
  );
}
export default withHeader(LoginPage);
