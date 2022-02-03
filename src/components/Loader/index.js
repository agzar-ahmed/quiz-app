import React from 'react'

export default function index({message}) {
    return (
            <div>   
                <div className='loader'></div>
                <p className="loaderText">{message}</p>
           </div>  
    )
}
