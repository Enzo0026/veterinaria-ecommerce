import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigationbar from "./components/layout/Navbar";
import Home from "./components/views/Home/Home";
import Planes from "./components/views/planes/Planes";
import ProductsTable from "./components/views/admin/productos/ProductsTable";
import ProductCreate from "./components/views/admin/productos/productCreate/ProductCreate";
import ProductEdit from "./components/views/admin/productos/ProductEdit/ProductEdit";
import ProductDetails from "./components/views/admin/productos/productDetails/ProductDetails";
import About from "./components/views/about/About";
import Error404 from "./components/views/error404/Error404";
import Footer from "./components/layout/Footer";
import axios from "../src/config/axiosInit";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  const [products, setProducts] = useState();
  const [loggedUser, setLoggedUser] = useState({});

  const URL = import.meta.env.VITE_API_VETERINARIA;

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    try {
      const res = await axios.get(URL);
      setProducts(res.data);
    } catch {
      console.log("Hubo un error en el server");
    }
  };

  return (
    <BrowserRouter>
      <Navigationbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home products={products} />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route
                    exact
                    path="/product/table"
                    element={
                      <ProductsTable products={products} getAPI={getAPI} />
                    }
                  />
                  <Route
                    exact
                    path="/product/create"
                    element={<ProductCreate getAPI={getAPI} />}
                  />
                  <Route
                    exact
                    path="/product/edit/:id"
                    element={<ProductEdit getAPI={getAPI} />}
                  />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>
          /
          <Route
            exact
            path="/product/buy/:id"
            element={<ProductDetails URL={URL} />}
          />
          <Route
            exact
            path="/auth/login/"
            element={<Login setLoggedUser={setLoggedUser} />}
          />
          <Route
            exact
            path="/auth/register/"
            element={<Register setLoggedUser={setLoggedUser} />}
          />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
