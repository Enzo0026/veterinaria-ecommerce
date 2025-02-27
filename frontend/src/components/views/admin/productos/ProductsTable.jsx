import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductsTable = ({ products, getAPI }) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de productos</h1>
          <Link
            to="/product/create"
            className="btn text-decoration-none text-center"
          >
            Añadir producto
          </Link>
        </div>
        <hr />
        {products?.length !== 0 ? (
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image url</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <Product key={product?._id} product={product} getAPI={getAPI} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1>No se encontraron productos</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsTable;
