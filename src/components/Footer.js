import React from "react";

const Footer = () =>{

    const name = (fullname,nickname) =>{
        return fullname + " " + nickname
    }
    return(
        <div>
            <h1>
                {name("Pawornwat Tangwattanapornchai","Fight")}
            </h1>
        </div>
    )
}
export default Footer