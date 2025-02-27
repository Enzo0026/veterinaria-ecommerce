import { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductDetails = ({ URL }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const productApi = await res.json();
      setProduct(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-4">
            <Card.Img
              className="img-fluid"
              variant="top"
              src={product.urlImg}
            />
          </Card>
        </Col>
        <Col>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <Card.Title className="m-0 text-truncate">
                {product.productName}
              </Card.Title>
              <span className="badge bg-yellow">New</span>
            </div>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              atque dolores minima facere tenetur sequi magni aspernatur
              praesentium.
            </Card.Text>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0 ms-4 fs-4">${product.price}</p>
              <Link
                to="product/confirm/"
                className="btn text-decoration-none text-center"
              >
                Comprar
              </Link>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;