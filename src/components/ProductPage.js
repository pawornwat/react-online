import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Table, Image, Badge, Spinner } from "react-bootstrap";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const resp = await axios.get(
          "https://api.codingthailand.com/api/course"
        );
        console.log(resp.data.data);
        setProduct(resp.data.data);
      } catch (error) {
        setError(error);
        // console.log(error.response);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if(error){
      return(
          <div className="text-center mt-5 text-danger">
              <h4>Error from API,Please try again</h4>
              <p>{error.response.data.message}</p>
          </div>
      )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Product Page</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Detail</th>
                <th>Date</th>
                <th>View</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {product.map((p, index) => {
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.detail}</td>
                    <td>{p.date}</td>
                    <td>
                      {" "}
                      <Badge variant="primary">{p.view}</Badge>{" "}
                    </td>
                    <td>
                      <Image src={p.picture} rounded width={60}></Image>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
