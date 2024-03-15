import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../API/bootapi";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const AllCourses =() =>{
    
    useEffect(()=> {

        document.title = "All Courses | Courses Application";

    }, []);


    //Function to call Server
    const getAllCoursesFromServer = ()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //Success
                //console.log(response);
                console.log(response.data);
                toast.success("Course has been loaded",{
                    position: "bottom-center",
                });
                setCourses(response.data);
            },

            (error)=>{
                console.log(error);
                toast.error("Something went wrong", {
                    position: "bottom-center",
                });
            }
        );
    };


    //Calling loading course function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);



    const [courses, setCourses] = useState([
        
    ]);


    const updateCourses=(id)=>{
        setCourses(courses.filter( (c) => c.id != id));
    }

    
    return(

        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>

            {
               courses.length > 0 ? courses.map((item) => <Course course={item} update={updateCourses} />) : "No courses"
            }

        </div>
    );
        
    
};

export default AllCourses;