import React from "react"


const Header = () =>{
    let companyName = "TNI"
    const showMassage = () =>{
        return companyName + ".com"
    }


    return(
        <div>
            <h1>Hello {showMassage()}</h1>
        </div>
    )
}
export default Header