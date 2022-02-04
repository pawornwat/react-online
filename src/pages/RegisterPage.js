import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useToasts } from "react-toast-notifications";

const schema = yup
  .object({
    name: yup.string().required("ชื่อห้ามว่าง"),
    email: yup
      .string()
      .required("อีเมลห้ามว่าง")
      .email("อีเมลฟอร์แมตไม่ถูกต้อง"),
    password: yup
      .string()
      .required("พาสเวิร์ดห้ามว่าง")
      .min(3, "พาสเวิร์ดห้ามต่ำกว่า 3 ตัวอักษร"),
  })
  .required();

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const { addToast } = useToasts();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const apiURL = "https://api.codingthailand.com/api/register";
      const response = await axios.post(apiURL, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      //alert(response.data.message)
      addToast(response.data.message, {
        appearance: "success",
        autoDismiss: true,
      });
      history.replace("/login");
    } catch (error) {
      addToast(error.response.data.errors.email[0], {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Register</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                ref={register}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                ref={register}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={register}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              {errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
