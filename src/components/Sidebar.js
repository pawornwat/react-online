import React,{useState, useEffect} from "react";
const Sidebar = () =>{
    const [fullname, setFullname] = React.useState('John')
    const [isShow, setIsShow] = React.useState(true)

    const changeName = () => {
        setFullname("Marry")
        setIsShow(false)
    }

    React.useEffect(() => {
        console.log("sidebar useEffect")
    })
    React.useEffect(() => {
        console.log("sidebar useEffect one time only")
    },[])
    React.useEffect(() => {
        console.log("sidebar useEffect fullname")
    },[fullname])

    return(
        <>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>World</p>
            }
            <button onClick={changeName}>Change name</button>
        </>
    )
}
export default Sidebar