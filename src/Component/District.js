import React, { useState } from "react";
import './District.css'
import ShowDistrict from "./ShowDistrict";


function District() {
    const [District, setDistrict] = useState('')
    const [showDistrict, setShowDistrict] = useState('')
    const [Place, setPlace] = useState('')
    const [showPlace, setShowPlace] = useState('')

    const buttonHandle = () => {
        setShowDistrict(District)
        setShowPlace(Place)
    }

    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="subcontainer-1">
                        <h2>District</h2>
                        <input type="text" placeholder="Enter District" onChange={(event) => setDistrict(event.target.value)} />
                    </div>
                    <div className="subcontainer-2">
                        <h2>Place</h2>
                        <input type="text" placeholder="Enter Place" onChange={(event) => setPlace(event.target.value)} />
                    </div>

                    <div>
                        <div className="btnContainer"><button className="btn" onClick={buttonHandle}>Submit</button></div>
                    </div>
                </div>
            </div>
            <h3>details</h3>
            {
                showDistrict && <ShowDistrict props={{ showDistrict, showPlace }} />

            }

        </>
    )
}
export default District;