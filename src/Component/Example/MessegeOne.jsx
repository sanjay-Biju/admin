import React,{useState} from 'react'
import MessegeThree from './MessegeThree'
import MessegeTwo from './MessegeTwo'

const MessegeOne = () => {
    const[Check,setCheck] = useState(true)
  return (
    <div>
 <div >
            <input  type="button" value="submit" onClick={() => setCheck(!Check)} />
        </div>
        {
           Check ? <MessegeTwo/> :<MessegeThree/>
        }
    </div>
  )
}

export default MessegeOne