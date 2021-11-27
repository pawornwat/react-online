import React from "react";
import {logo, title} from '../styles/style'

const Logo = () =>{
    let logoImage = {
        url: "./logo192.png"
    }
    return(
        <div>
            <h3 style={title}>Logo</h3>
            <img style={logo} src={logoImage.url} width="100" alt="Logo"/>
        </div>
    )

}
export default Logo