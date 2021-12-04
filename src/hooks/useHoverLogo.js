import React from "react";
function useHoverLogo(){
    const [hover,setHover] = React.useState()

    const mouseOver = () =>{
        setHover(true)
    }

    const mouseOut = () =>{
        setHover(false)
    }
    return [hover,mouseOver,mouseOut]
}
export default useHoverLogo