import React from "react";
import { Form , Button  } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import {
    useHistory
  } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

const schema = yup.object({
    email: yup.string().required('อีเมลห้ามว่าง').email('อีเมลฟอร์แมตไม่ถูกต้อง'),
    password: yup.string().required('พาสเวิร์ดห้ามว่าง').min(3,'พาสเวิร์ดห้ามต่ำกว่า 3 ตัวอักษร')
  }).required();

const LoginPage = () => {
     const history = useHistory()
     const { register, handleSubmit, formState:{ errors } } = useForm({
         resolver: yupResolver(schema)
     });

       const { addToast } = useToasts()
      
       const onSubmit = async(data) => {
           try{
            const apiURL = 'https://api.codingthailand.com/api/login'
            const response = await axios.post(apiURL,
                    {
                        email : data.email,
                        password : data.password
                    }
                )
                localStorage.setItem('token', JSON.stringify(response.data))

                const apiURLProfile = 'https://api.codingthailand.com/api/profile'
                const responseProfile = await axios.get(apiURLProfile,
                    {
                        headers: {
                            Authorization: 'Bearer ' + response.data.access_token
                        }
                    })
                console.log(responseProfile.data)
                localStorage.setItem('profile', JSON.stringify(responseProfile.data.data.user))
                //alert(response.data.message)
                addToast('ล็อกอินสำเร็จ' , {appearance: 'success', autoDismiss: true })
                history.replace("/")
                history.go(0)
            }catch(error){
                addToast(error.response.data.message , {appearance: 'error', autoDismiss: true})
            }
       }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Login</h2>
          <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" ref={register}  className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
               {
                  errors.email && (
                      <Form.Control.Feedback type="invalid">
                          {errors.email.message}
                      </Form.Control.Feedback>
                  )
              } 
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" name="password" ref={register}  className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
               {
                  errors.password && (
                      <Form.Control.Feedback type="invalid">
                          {errors.password.message}
                      </Form.Control.Feedback>
                  )
              } 
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
