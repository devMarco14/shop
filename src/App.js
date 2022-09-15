import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes /Detail";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((id, index) => (
                    <Card shoes={shoes[index]} i={index} />
                  ))}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        alt="shoes"
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}원</p>
    </div>
  );
}

export default App;
