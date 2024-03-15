import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name, title}){

    return(
        <div>
            <Card className="bg-warning mt-2 mb-4">
                <CardBody>
                <h1 className="text-center">Welcome to Course Application</h1>
                </CardBody>
            </Card>
            
        </div>
    )
}

export default Header;