import React, { useState } from 'react'
import Display from './Display'

const Name = () => {

    const [Name, setName] = useState('')

    return (
        <>
            <div>
                <h3>Enter Your Name</h3>
                <input type='text' placeholder='Enter Your Name' onChange={(event) => setName(event.target.value)} />
            </div>
            {
                Name && <Display props ={{Name}}/>
            }
            
        </>
    )
}

export default Name