import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../API/bootapi";
import { toast } from "react-toastify";

const AddCourse = () =>{

    useEffect(()=> {

        document.title = "Add Course | Courses Application"
        
    }, []);


    const[course, setCourse] = useState({});
    //Form Handler Function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }


    //Creating function to post data
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("Success");
                toast.success("Course added successfully");
                setCourse({id: "", title:"", description:""});
            },

            (error)=>{
                console.log(error);
                console.log("Error");
                toast.error("Something went wrong");
            }
        );
    };


    return(
        <Fragment>

            <h1 className="text-center my-3">Fill Course Detail</h1>
            
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter user Id here" name="userId" id="userId" 
                    onChange={(e)=>{
                        setCourse({...course, id: e.target.value})
                    }}></Input>
                </FormGroup>

                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title"
                    onChange={(e)=>{
                        setCourse({...course, title: e.target.value})
                    }}
                    ></Input>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description"
                    style={{height: 100}}
                    onChange={(e)=>{
                        setCourse({...course, description: e.target.value})
                    }}
                    ></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ms-2">Clear</Button>
                </Container>

            </Form> 
        </Fragment>
    );
};

export default AddCourse;