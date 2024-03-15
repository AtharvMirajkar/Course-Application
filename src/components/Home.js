import React, {useEffect} from "react";
import {Container, Button} from "reactstrap";

const Home = () =>{

    useEffect(()=> {

        document.title = "Home | Courses Application";
        
    }, []);

    return (
        <div class="p-5 text-center">
            
            <h1>Find Your Course</h1>
            <p>
                Courses Application developed for learning purpose backend made on spring boot, frontend made on React JS and MySQL is used as a database.
            </p>
            <Container>
                <Button color="primary" outline>Start Using</Button>       
                
            </Container>
        </div>
    )
}

export default Home;