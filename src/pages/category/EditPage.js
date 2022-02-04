import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("Category news cannot"),
  })
  .required();

export default function EditPage() {
  const history = useHistory();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    const apiUrl = "https://api.codingthailand.com/api/category";
    try {
      const dataResult = {
        id: id,
        name: data.name,
      };
      const resp = await axios.put(apiUrl, dataResult);
      alert(resp.data.message);
      history.push("/category");
    } catch (error) {
      alert(error);
    }
  };
  const getData = async (id) => {
    const resp = await axios.get(
      "https://api.codingthailand.com/api/category" + id
    );
    setValue("name");
  };
  React.useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Edit Category</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Category News</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Category"
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
