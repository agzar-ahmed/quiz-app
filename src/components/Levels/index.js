import React from 'react';
import Stepper from 'react-stepper-horizontal'

const Levels = (props) => {
    return (
        <div className="levelsContainer" style={{background:'transparent',padding:'0px',marginBottom:'25px'}}>
            
              <Stepper steps={ props.levelNames.map((level,index) =>({title: level.toUpperCase()}))}
                       activeStep={props.quizLevel}
                       defaultTitleColor={'#E0E0E0'}
                       activeColor ={'#EB1D27'}
                       activeTitleColor={'#EB1D27'}
                       completeColor={'#EB1D0070'}
                       completeTitleColor={'#EB1D0070'}
                       circleTop={0}
              />
            
            {/* <h2 className="headingLevels"></h2> */}
        </div>
    )
}

export default Levels
