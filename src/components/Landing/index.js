import React,{ useRef, useEffect, useState,Fragment } from 'react'
import {Link} from 'react-router-dom' 


const Landing = () => {
    const [btn,setBtn] = useState(false);

    const refWolverine=useRef(null);
    useEffect(()=>{
       setTimeout(()=>{
            refWolverine.current.classList.add("startingImg");
            // setBtn(true)
        },200)
        setTimeout(()=>{
            setBtn(true)
        },500)
        // setTimeout(()=>{
        //     refWolverine.current.classList.remove("startingImg");
        //     setBtn(true)
        // },5000)
    },[]);
    const setLeftImg = () =>  refWolverine.current.classList.add("leftImg");
    const unsetLeftImg = () => refWolverine.current.classList.remove("leftImg");
    const setRightImg = () =>  refWolverine.current.classList.add("rightImg");
    const unsetRightImg = () => refWolverine.current.classList.remove("rightImg");

    return (
        <div ref={refWolverine} className="welcomePage">
          { btn && 
          <Fragment>
            <div onMouseOver={setLeftImg} onMouseLeave={unsetLeftImg} className="leftBox">
                <Link to="/signup" className="btn-welcome">Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseLeave={unsetRightImg} className="rightBox">
                <Link to="/login" className="btn-welcome">Connexion</Link>
            </div>
          </Fragment>  
            }
        </div>
    )
}

export default Landing