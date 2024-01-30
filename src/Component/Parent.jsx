import React, { useState } from "react";
import Child from './Child'


function Parent (){
    const [FirstName,setFirstName] = useState('')
    const [SecondName,setSecondName] = useState('')
    const [showFirstName,setshowFirstName] = useState('')
    const [showSecondName,setshowSecondName] = useState('')
     
    const ButtonHandle =() =>{
        setshowFirstName(FirstName)
        setshowSecondName(SecondName)
    }
    return(
        <>
        <div>
            <input type="text" placeholder="Enter your First name" onChange={(event)=> setFirstName(event.target.value)} />
        </div>
        <div>
        <input type="text" placeholder="Enter your Second name" onChange={(event)=> setSecondName(event.target.value)} />
        </div>
        <div>
            <input type="button" value="submit" onClick={ButtonHandle} />
        </div>
        <h3>details</h3>
        {
             <Child props ={{ showFirstName,showSecondName}} />
        }
        </>
    )
}
export default Parent