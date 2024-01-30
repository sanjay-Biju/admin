import React from 'react'

const GrandChild = ({props}) => {
    console.log(props);
    const {showFirstName,showSecondName} = props
  return (
    <div>
        <p>GrandChild</p>
        <div>{showFirstName}</div>
        <div>{showSecondName}</div>
    </div>
  )
}

export default GrandChild