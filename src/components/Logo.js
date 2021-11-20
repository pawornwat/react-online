import React from "react";

const Logo = () =>{
    let logoImage = {
        url: "./logo192.png"
    }
    return(
        <div>
            <img src={logoImage.url} width="100" alt="Logo"/>
        </div>
    )

}
export default Logo