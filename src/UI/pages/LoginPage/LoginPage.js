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
import * as Yup from "yup";
import { Button } from "../../components/Button/Button.style";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(2).required("Required"),
  lastName: Yup.string().min(2).required("Required"),
  email: Yup.string().min(9).email("Invalid email format").required("Required"),
});

function LoginPage() {
  const { login, isAuth, agree, setAgree } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    formik;

  if (isAuth) {
    return <Redirect to={routes.HOME} />;
  }

  return (
    <LoginStyle>
      <Card>
        <h1>login page</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="name"
              aria-label="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {touched.name && errors.name ? <div>{errors.name}</div> : null}
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="lastname"
              aria-label="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="email"
              aria-label="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </InputGroup>
          {touched.email && errors.email ? <div>{errors.email}</div> : null}
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
          <Button type="submit" disabled={!agree}>
            Submit
          </Button>
        </form>
      </Card>
    </LoginStyle>
  );
}
export default withHeader(LoginPage);
