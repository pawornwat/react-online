import React from "react"
// import Logo from "./Logo"


const Header = () =>{
    let companyName = "TNI"
    const showMassage = () =>{
        return companyName + ".com"
    }

    // const isLogin = false   
    const showMe =  () => {
        alert('Hello React')
    }
    const product = [
        {id:1,name:'John',age:10},
        {id:2,name:'Hi',age:1},
        {id:3,name:'Hoo',age:2},
    ]

    return(
        <div>
            <h1>Hello {showMassage()}</h1>

            {/* {
                isLogin === true ?(
                    <div>
                        <p>Welcome</p>
                        <p>Student</p>
                    </div>
                ):(
                    <div>
                        <p>Welcome</p>
                        <p>Teacher</p>
                    </div>
                )
            }{
                isLogin ? <Logo></Logo> : <p>Unlock</p>
            } */}
            <button onClick={showMe}>
                ClickMe
            </button>
            
            <ul>
                {
                product.map( (product,index) =>{
                    return <li key= {product.id} > {product.name} - {product.age} </li>
                })
                }
            </ul>
            

        </div>
    )
}
export default Header