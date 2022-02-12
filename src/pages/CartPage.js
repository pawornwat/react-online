import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function CartPage() {
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <h2>CartPage</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ProductId</th>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  cart.map((c, index) => {
                      console.log(c)
                    return (
                        <tr key={c.id}>
                        <td>{++index}</td>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.price}</td>
                        <td>{c.qty}</td>
                        <td>{c.price * c.qty}</td>
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
