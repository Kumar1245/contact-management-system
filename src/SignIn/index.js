import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik, useFormik } from "formik";

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const initailValues = {
    email: "",
    password: "",
  };
  //   const dispatch = useDispatch();
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: initailValues,
    onSubmit: () => {
      const reqBody = {
        email: values.email,
        password: values.password,
      };
      //   axios
      //     .post("https://api-eduvila.onrender.com/login", reqBody)
      //     .then((res) => {
      //       console.log(reqBody);
      //       console.log(res.data[0].token);
      //       if (res.data[0].token) {
      //         localStorage.setItem("token", res.data[0].token);
      //         dispatch(setState(true));
      //   localStorage.setItem("user_id", res.data[0].id);
      //   navigate("/");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log("Data Error");
      //     });
    },
  });
  return (
    <>
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col items-center gap-3"
        >
          <TextField
            size="small"
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value=""
            onChange={handleChange}
          />
          <TextField
            size="small"
            type="password"
            label="Password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value=""
            onChange={handleChange}
          />
          <input type="text" id="" name="" placeholder="Enter Des" />
          <Button type="submit" variant="contioned" color="inherit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
