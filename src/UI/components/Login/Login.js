import React from "react";
import { useAuth } from "../../../context/Auth/reducer";
import { useFormik } from "formik";
import * as Yup from "yup";

import LoginStyle from "./Login.style";

import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
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

function Login({ title, subtitle }) {
  const { login, agree, isRegistered } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      login(values);
      isRegistered(values.email);
    },
  });
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    formik;

  return (
    <LoginStyle>
      <Card>
        <h1>{title}</h1>
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
          {subtitle}
          <Button type="submit" disabled={!agree}>
            Submit
          </Button>
        </form>
      </Card>
    </LoginStyle>
  );
}

export default Login;
