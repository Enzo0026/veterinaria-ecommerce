import { use, useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../../../config/axiosInit";
//import { validateCategory, validatePrice, validateProductName, validateUrl }
import Swal from "sweetalert2";
import { STATUS } from "../../../../../constants";

const ProductEdit = ({ getAPI }) => {
  const [product, setProduct] = useState({});
  const URL = import.meta.env.VITE_API_VETERINARIA;
  const navigate = useNavigate();
  const { id } = useParams();

  const productNameRef = useRef(null);
  const priceRef = useRef(null);
  const irlImgRef = useRef(null);

  useEffect(() => {
    getOne();
  }, []);

  const getOne = async () => {
    try {
      const res = await axios.get(`${URL}/${id}`);
      const productApi = res.data;

      setProduct(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
    if (
      !validateProductName(productNameRef.current.value) ||
      !validatePrice(priceRef.current.value) ||
      !validateUrl(urlImgRef.current.value) ||
      !validateCategory(product.category)
    ) {
      Swal.fire("Oop!!", "Some data is invalid", "Error");
      return;
    }

    const productUpdated = {
      productName: productNameRef.current.value,
      price: priceRef.current.value,
      urlImg: urlImgRef.current.value,
      category: product.category,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(`${URL}/${id}`, productUpdated);
          console.log(res);
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire(
              "Updated",
              "Your product have been updated successfully",
              "success"
            );
            e.target.reset();
            getAPI();
            navigate("/product/table");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Editar producto</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: alimento"
              defaultValue={product?.productName}
              ref={productNameRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              defaultValue={product?.urlImg}
              ref={urlImgRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={product.category}
              onChange={({ target }) =>
                setProduct({ ...product, category: target.value })
              }
            >
              <option value="">Select an option</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn">Update</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ProductEdit;
