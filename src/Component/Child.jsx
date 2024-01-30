import React from "react";
import './GrandChild'
import GrandChild from "./GrandChild";

const Child = ({props}) =>{
    


    return(
        <>
        <p>Child</p>
        <GrandChild props= {props}/>
        </>
    )

}
export default Child