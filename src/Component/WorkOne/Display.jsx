import React from 'react'

const Display = ({ props }) => {
    const { Name } = props
    return (
        <div>
            <p>You Have Entered...</p>
            <div>{Name}</div>
        </div>
    )
}

export default Display