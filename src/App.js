// import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const btnhandle = () => {
    toast.success("Done", { position: "top-center" });
  };

  return (


    <div>
      <Router>





        <ToastContainer />

        <Container>

          <Header />

          <Row>

            <Col md={4}>   <Menus />  </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/add-course" element={<AddCourse />}></Route>
                <Route path="/view-courses" element={<AllCourse />}></Route>
              </Routes>


            </Col>

          </Row>
        </Container>






      </Router>

    </div>

  );
}

export default App;
