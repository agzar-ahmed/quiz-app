
import React,{useState} from 'react';
import{Link} from 'react-router-dom'

const FogetPassword = (props) => {
    
    const [email, setEmail] = useState("");
    const [success, setSuccess]= useState(null);
    const [error, setError]= useState(null);

    console.log(email)
    console.log(error)
    function renderBtn(){
        return(
    email ?
    <button className="btnSubmit" onClick={(e)=> handelSubmit(e)}>Inscription</button>
    :<button className="btnSubmit" disabled>Inscription</button>
    
        )
    } 
    let findUser = new Promise((resolve, reject) => {
        setTimeout( function() {
          resolve("Success!")  
          //reject("please check you email adresse")
        }, 250)
      })
      
     

    const handelSubmit = (e) =>{
    e.preventDefault();
    findUser
    .then((res) => {
        // console.log("Yay! " + successMessage)
        setError(null)
        setSuccess(`Check ${email} to change your password.`)
        setEmail("");
        setTimeout(()=>props.history.push('/login'),5000);
    })
    .catch((err)=>{
        // console.log(err)
        setError(err);
        // setError(`Check ${email} to change your password.`)
        // setEmail("");
        // setTimeout(()=> setError(""),5000);
       
    })


    }

    return (
    <div className="signUpLoginBox">
        <div className="slContainer">
         <div className='formBoxLeftForget'>
         </div>
         <div className='formBoxRight'>
            <div className='formContent'>
              {success &&  <span style={
                  {
                      border: "1px solid green",
                      background:"green",
                      color:"#ffffff"

                  } 
              }>{success}</span>}

             {error &&  <span style={
                  {
                      border: "1px solid red",
                      background:"red",
                      color:"#ffffff"

                  }
              }>{error}</span>}

            <h2>Forget password ?</h2>
                <form>
                 
                  <div className='inputBox'>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email"  autoComplete="off" required/>
                      {/* <input onChange={onChange} value={email} type="email" id="email"  autoComplete="off" required/> */}
                      <label>Email</label>
                  </div>

                </form>

            </div>

            {renderBtn()}

            <div className='linkContainer'><Link className="simpleLink"to='/login'>Already signed ? login page</Link></div>

         </div>

            
        </div>
     </div>
       
    )
}

export default FogetPassword
