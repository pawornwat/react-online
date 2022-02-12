import React from "react";
import { Table, Image, Badge, Spinner, Button} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { addToCart } from "../redux/actions/cartAction";
import { useSelector,useDispatch } from "react-redux";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer.cart)
  const total = useSelector((state) => state.cartReducer.total)

  const getData = async () => {
    try {
      setLoading(true); // เริ่มหมุนติ้วๆตรงนี้
      const resp = await axios.get("https://api.codingthailand.com/api/course");
      // console.log(resp.data)
      setProduct(resp.data.data);
    } catch (error) {
      // console.log(error.response)
      setError(error);
    } finally {
      setLoading(false); // หยุดตรงนี้ทุกกรณีที่ทำเสร็จว่าว่าจะ try หรือ catch ก็ตาม
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  const addCart =(p)=>{
    console.log(p);
    const product = {
      id:p.id,
      name:p.title,
      price:p.view,
      qty:1
    }
    dispatch(addToCart(product,cart))
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h2>Product Page</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Detail</th>
                <th>Created Date</th>
                <th>View</th>
                <th>Picture</th>
                <th>Detail</th>
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
                      <Badge variant="success">{p.view}</Badge>
                    </td>
                    {/* <td>{p.picture}</td> */}
                    <td>
                      <Image src={p.picture} rounded width={60} />
                    </td>
                    <td>
                      <Link to={`/detail/${p.id}/title/${p.title}`}>
                        <Button variant="primary">Click</Button>
                      </Link>

                      <Button variant="outline-warning" className="ml-2" onClick={() => addCart(p)}>Buy</Button>
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
};

export default ProductPage;
