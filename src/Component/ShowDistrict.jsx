import React from 'react'

const ShowDistrict = ({props}) => {
    const { showDistrict, showPlace } = props
    console.log(showDistrict);
    
  return (
    <div>
    <div>{showDistrict}</div>
    <div>{showPlace}</div>
    </div>
  )
}

export default ShowDistrict