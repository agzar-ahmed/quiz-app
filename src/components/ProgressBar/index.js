import React from 'react';

const ProgressBar = (props) => {
    return (
        <>
       <div className="percentage">
                 <div className="progressPercent"> Question: {props.idQuestion +1}/{props.maxQuestions} </div>
                 <div className="progressPercent">{ props.progress}%</div>            
        </div>
        <div className="progressBar">
                <div className="progressBarChange" style={{width:  `${props.progress}%` }}>

                </div>
        </div>
        </>
    )
}

export default ProgressBar
