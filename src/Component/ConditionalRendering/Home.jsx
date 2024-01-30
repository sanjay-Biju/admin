import React, { useState } from "react";
import Card from "./Card";
const Home = () => {

    const [Check,setCheck] = useState(true)

    return (
        <div>
            <div>
                <input type="button" value="submit" onClick={() => setCheck(!Check)} />
                </div>
            { 
                Check && <Card/>
            }
        </div>

    )
}
export default Home