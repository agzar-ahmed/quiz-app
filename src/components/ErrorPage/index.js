import React from 'react'
import bag from '../../images/schoolbag.png'

const imgStyle ={
    width: '300px',
    height: '300px',
    margin: '10px auto'
}
const headerStyle={
    textAlign:'center'
}

const ErrorPage = () => {
    return (
        <div className="quiz-bg">
           <div className="container" style={headerStyle}>
            <h2>Oops,page not found</h2>
            <img src={bag} alt="error image" style={imgStyle}/>
           </div> 
        </div>
    )
}

export default ErrorPage
