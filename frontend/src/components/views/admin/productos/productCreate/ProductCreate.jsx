import { useState } from "react";
import { Container, Form, Alert } from "react-bootstrap";
//import { validateCategory, validatePrice, validateProductName, validateUrl }
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "../../../../../config/axiosInit";
import { STATUS } from "../../../../../constants";

const ProductCreate = ({ getAPI }) => {
  const URL = import.meta.env.VITE_API_VETERINARIA;
  const navigate = useNavigate();

  const [errorMessage, setErrorMessagge] = useState(null);
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.targe.name;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateProductName(inputs.productName) ||
      !validatePrice(inputs.price) ||
      !validateUrl(inputs.urlImg) ||
      !validateCategory(inputs.category)
    ) {
      Swal.fire("Oop!!", "Some data is invalid", "Error");
      return;
    }
    const newProduct = {
      productName: inputs.productName,
      price: inputs.price,
      urlImg: inputs.urlImg,
      category: inputs.category,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(URL, newProduct, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token"))
                .token,
            },
          });

          console.log(res);
          if (res.status === STATUS.STATUS_CREATED) {
            Swal.fire(
              "Created",
              "Your product have been created successfully",
              "success"
            );
            e.target.reset();
            getAPI();
            navigate("/product/table");
          }
        } catch (error) {
          console.log(error);
          error.response.data?.messagge &&
            setErrorMessagge(error.response.data?.messagge);
          error.response.data?.errors?.length > 0 &&
            error.response.data.errors?.map((error) =>
              setErrorMessagge(error.msg)
            );
          setShow(true);
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Añadir producto</h1>
        <hr />
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: alimento"
              name="productName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 5000"
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" name="urlImg" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Categoría</Form.Label>
            <Form.Select name="category" onChange={handleChange}>
              <option value="">Select an option</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn">Guardar</button>
          </div>
        </Form>
        {show && (
          <Alert
            key={errorMessagge}
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            {errorMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default ProductCreate;