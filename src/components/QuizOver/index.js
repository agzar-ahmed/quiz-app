import React,{Fragment, useEffect, useState} from 'react'

const QuizOver = (props) => {
     
    const {data, result, score, maxQuestions,
           quizLevel, levelNames,setQuizEnd,
           setScore, setQuizLevel} = props;

    console.log(score,'score')
    console.log(levelNames,'levelNames')
    console.log(quizLevel,'quizLevel')


    const [ localData, setLocalData]  = useState([])

    const nextLevel = () =>{
       // e.preventDefault();
        setQuizEnd(false)
        setScore(0)

        console.log(quizLevel,'nextLevel')
    }

    const nextStep = score >= maxQuestions/2 ?
        <>
            <div className="stepsBtnContainer">
            {  quizLevel <= levelNames.length-1 ?(
                <>
                <p className="successMsg"> Good job,Go to the next level </p>
                <button className="btnResult success" 
                        onClick={nextLevel}>Next Level</button>
                </>
            ):(
                <>
                <p className="successMsg"> Good job, you are expert now </p>
                 <button className="btnResult success"
                         onClick={()=>{
                                      setScore(0);
                                      setQuizEnd(false);
                                      setQuizLevel(0);
                                      
                                      }}>
                                          Home page
                 </button>
                </>
            )}
            </div> 
                <div className="percentage">
                    <div className="progressPercent">success: {result}%</div>
                    <div className="progressPercent">score: {score}/{maxQuestions} </div>            
                </div>  
                <hr />
                <p>Answers for all the questions</p>
                <div className="answerContainer">
                    <table className="answers">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Info</th>
                            </tr>  
                        </thead>
                        <tbody>
                            {console.log(localData,'question and answer data')}
                            {  localData && localData.map((element,index) =>
                                <tr key={index}>
                                    <td>{element.question}</td>
                                    <td>{element.answer}</td>
                                    <td><button className="btnInfo" onClick={ ()=>console.log('info button')}>Info</button></td>
                                </tr> 
                            )
                            } 
                        </tbody>
                    </table>
                </div>
                          
        </>:
        (
            <Fragment>
                <div className="stepsBtnContainer">
                <p className="failureMsg"> Failed, you have to do the quiz again </p>
                <button className="btnResult success failureMsg" 
                        onClick={()=>{ setQuizEnd(false);
                                       setScore(0);
                                    }}
                        >
                            Restart
                </button>
                </div>
            
                <div className="percentage">
                    <div className="progressPercent">success: {result}%</div>
                    <div className="progressPercent">score: {score}/{maxQuestions} </div>            
                </div>
            </Fragment>
        )
//componentDidMount

useEffect(()=>{
    setLocalData(data)
},[])

//component didupdate
    // useEffect(()=>{
    //     setLocalData(data)
    // },[localData])

    return (
        <Fragment>
             { nextStep }
        </Fragment>
    )
}

export default React.memo(QuizOver)
