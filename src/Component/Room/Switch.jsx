import React, { useState } from "react";
import LightBulb from "./LightBulb"
import "./LightBulb.css"
import DarkBlub from "./DarkBlub";

const Switch = () =>{
    const[Check,setCheck] = useState(true)

    return(
        <>
        <div >
            <input  type="button" value="submit" onClick={() => setCheck(!Check)} />
        </div>
        {
           Check ? <LightBulb/> :<DarkBlub/>
        }
        </>
        
    )

}
export default Switch