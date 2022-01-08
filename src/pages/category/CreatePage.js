import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("Category news cannot"),
  })
  .required();

export default function CreatePage() {
    const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async(data) => {
    console.log(data);
    const apiUrl = 'https://api.codingthailand.com/api/category'
    try{
        const dataResult = {
            name: data.name
        }
        const resp = await axios.post(apiUrl,dataResult)
        alert(resp.data.message)
        history.push('/category')
    }catch(error){
        alert(error)
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>CreatePage</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Category News</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Category"
                name="name"
                ref={register}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
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
