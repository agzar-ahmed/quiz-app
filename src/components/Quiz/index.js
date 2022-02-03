import React,{useState,useEffect,useRef}from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
// import {QuizQuestion} from '../data'
import QuizOver from '../QuizOver'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoChevronForward } from 'react-icons/io5'
import Loader from '../Loader';
import axios from 'axios'

const Quiz = (prop) => {
   
   const [quiz,setQuiz] = useState([])
   const [quizData, setQuizData] = useState([])
   const [levelNames,setLevelNames] = useState(["beginner","confirmed","expert"])
   const [quizLevel,setQuizLevel] = useState(0);
   const [maxQuestions,setMaxQuestions] = useState(3);
   const [storedQuestions,setStoredQuestions] = useState([]);
   const [question,setQuestion] = useState('');
   const [options,setOptions] = useState([]);
   const [idQuestion,setIdQuestion] = useState(0);
   const [progress,setProgress] = useState(0);//Math.floor(100/maxQuestions));
   const [btnDisabled,setBtnDisabled] = useState(true);
   const [userAnswer, setUserAnswer] = useState('');
   const [score, setScore] = useState(0);
   const [scorePercentage, setScorePercentage] = useState(0)
   const [quizEnd, setQuizEnd] = useState(false);


   const storedDataRef = useRef();



   const showWelcomeMsg = () =>{
       toast.dark('Welcome (user name) good luck', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        // console.log('toast')
   }

    const nextQuestion=()=>{

        if(idQuestion < storedQuestions.length-1){
            setIdQuestion(idQuestion+1);
            setProgress(progress + Math.floor(100/maxQuestions));
            setBtnDisabled(true);
            
            // // console.log(progress,'progress')
        }else{
            setQuizEnd(true)
            // gameOver()
            setIdQuestion(0)
            setProgress( Math.floor(100/maxQuestions))
        }

        if(userAnswer === (storedDataRef.current[idQuestion].answer)){
            setScore(score +1)
            // console.log(score,'score')
            toast.success('Good +1', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            toast.error('missed +0', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
                     
    }
    
    const submitAnswer =(selectedAnswer) =>{
        setUserAnswer(selectedAnswer);
        setBtnDisabled(false);
        // console.log(btnDisabled,'btnDisabled')
        // console.log(selectedAnswer,'selectedAnswer')
        // console.log(storedDataRef.current[idQuestion].answer,'true Answer')
    } 

    const getPesrsentage = (maxQuestions,score) => score*100 / maxQuestions;
    
    const gameOver = (result) =>{
 
        // // // // console.log(score,'score score');
        // // // // console.log(scorePercentage,'scorePercentage ')

        if(result > 50 && quizLevel <= levelNames.length-1){
            setQuizLevel(quizLevel +1);
            console.log(quizLevel,'inside gameOver')
            console.log(score,'score inside gameOver')
            setScorePercentage(result);        
        } else{
            setScorePercentage(result);
        }
    }

    const reorderData=(data)=>{
        // return data.map((element,index)=>
        //     {
        //         quizz: {
        //                 beginner: [
        //                     {
        //                         id: index,
        //                         question: element.question,
        //                         options: [
        //                             element.correct_answer,
        //                             // ...element.incorrect_answers
        //                         ],
        //                         answer: element.correct_answer,
        //                     }
        //                 ]
        //         }
        //     }    
        // )
        // console.log(reorderData(dataArray),'reorder Array')
        // console.log(data)
    }
const loadQuestion= (level) =>{
            // // console.log(level)
            // console.log(level,'level');
            // // console.log(levelNames.length,'levelNames');
            axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
            .then((res)=>{   
                console.log(res.data.results,'result')
                const beginner = res.data.results.map((element,index)=> ( 
                    //{quiz: element}
                      //quizz: { //element 
                         
                                {
                                    id: index,
                                    question: element.question,
                                    options: [
                                        element.correct_answer,
                                        ...element.incorrect_answers
                                    ],
                                    answer: element.correct_answer,
                                }
                            
                    
                    //}
                    

               ))
               console.log(beginner)
               setQuiz(beginner)
                // reorderData(res.data.results)
            })
            .catch((err)=>{
                console.log(err);
            });
}
const showQuiz= () =>{
            let fetchedArrayQuiz =[]
            console.log(quiz,'quizQuestion')
            if(quiz){
                console.log(quiz)
                  fetchedArrayQuiz = quiz;
                //  QuizQuestion[0].quizz[level];
                }

                
                // export const QuizQuestion = [
                //     { 
                //         fournisseur: "Donkey Geek (https://www.youtube.com/c/DonkeyGeek)",
                //         sujet: "Application Marvel Quiz pour apprentissage React JS",
                //         quizz: {
                //             beginner: [
                //                 {
                //                     id: 0,
                //                     question: "De quelle équipe fait partie Iceman?",
                //                     options: [
                //                         "The X-Men",
                //                         "The Fantastic Four",
                //                         "The Invaders",
                //                         "The Liberators"
                //                     ],
                //                     answer: "The X-Men",
                //                     heroId: 1009362
                //                 },

  
            if(fetchedArrayQuiz.length >= maxQuestions){

                let quizQandA = [];

                for(let i=0; i < maxQuestions ;i++){
                    quizQandA.push(fetchedArrayQuiz[i]);    
                  }

              storedDataRef.current = quizQandA;
              // console.log(storedDataRef.current,'storedDataRef.current')
              const questions = quizQandA.map(({answer, ...KeepRest}) => KeepRest)
              


             //   setQuizData()
              //select max number of question in quiz
             

              

             //   // console.log(quizQuestions,'quizQuestions')
              setStoredQuestions(questions)
            }else{
                 console.log("not enought questions ")
            }
      }

    //**componentDidMount***/
    useEffect(() => {
            loadQuestion(levelNames[quizLevel])
            showWelcomeMsg()
            setScore(0)
            console.log(quiz,'quizcomponentDidMount')
        }, [])
    //**componentDidUpdate***/
    useEffect(() => {
       // storedQuestions.length > 0 && 
        if(storedQuestions.length>0) {
        // console.log(storedQuestions,'stored question');
        setQuestion(storedQuestions[idQuestion].question);
        setOptions(storedQuestions[idQuestion].options);
        // ;
        // console.log(options,'options')
        // console.log(question,'question')
        }
        
      }, [storedQuestions, idQuestion])

      useEffect(()=>{
        showQuiz(levelNames[quizLevel]);
      },[quiz])

      useEffect(()=>{
                      loadQuestion(levelNames[quizLevel]);
                      console.log(quizLevel,'quizLevel')
                      //setScore(0);
                      //setProgress(10)
                    },[quizLevel])
      useEffect(()=>{
            // console.log(scorePercentage,'score pecentage')
            const result = Math.floor(getPesrsentage(maxQuestions,score));
            console.log(result,'result update')
            console.log(score,'score update');
            gameOver(result)
            //   setScore(0);
            //setProgress(10)
                },[quizEnd])
    

    return  quizEnd ?
    (
        <QuizOver
                  data={storedDataRef.current}
                  result={scorePercentage}
                  score={score} 
                  maxQuestions={maxQuestions} 
                  quizLevel={quizLevel}
                  levelNames={levelNames}
                  setQuizEnd={setQuizEnd}
                  setScore={setScore}
                  setProgress={setProgress}
                  setQuizLevel={setQuizLevel}
                  />
    )
    :
    (
        <div>
            <ToastContainer />
            {/* <ToastContainer />
            <ToastContainer /> */}
            <Levels levelNames={levelNames}
                    quizLevel={quizLevel}
            />

            <ProgressBar progress={progress} 
                         maxQuestions={maxQuestions}
                         idQuestion={idQuestion}/>
           { question.length > 0 ?
           <div> 
           <h2>{question}</h2>
           
           {options.map((option,index) => <p className={`answerOptions ${userAnswer===option ? "selected": null}`}
                                             key={index}
                                             onClick={()=>submitAnswer(option)}>
                                                <IoChevronForward /> {option}</p> )}
          
           <button disabled = {btnDisabled} className='btnSubmit' onClick={() => nextQuestion()}>
               {idQuestion < maxQuestions-1 ? <>next</> : <>finish</> }
           </button>
           
           </div>
           :
            
           <Loader message=" loading Question..." />            
           
           
           }
            
        </div>
       
    )
}

export default Quiz
