import React,{useState} from 'react'
import { Link } from 'react-router-dom'




const Signup = (props) => {

const data ={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
      }

const [loginData, setloginData] = useState(data)

const onChange=(e) => {
    setloginData(
    {
    ...loginData,
    [e.target.id] : e.target.value
    }
    )
}
const { name, email, password, confirmPassword } = loginData 
function renderBtn(){
    return(
name ==''|| email =='' || password == '' || password !== confirmPassword || confirmPassword.length < 6 ?
<button className="btnSubmit" disabled>Inscription</button>
:<button className="btnSubmit" onClick={(e)=> handelSubmit(e)}>Inscription</button>
    )
} 

const handelSubmit = (e) =>{
  e.preventDefault();
  props.history.push('/welcome')
}
  
  return (
        <div className="signUpLoginBox">
        <div className="slContainer">
         <div className='formBoxLeftSignup'>
         </div>
         <div className='formBoxRight'>
            <div className='formContent'>
            <h2>Inscription</h2>
                <form>
                 
                  <div className='inputBox'>
                      <input onChange={onChange}  type="text" id="name"  autoComplete="off" required/>
                      <label>Name</label>
                  </div>

                  <div className='inputBox'>
                  <input onChange={onChange} value={email} type="email" id="email"  autoComplete="off" required/>
                      {/* <input onChange={onChange} value={email} type="email" id="email"  autoComplete="off" required/> */}
                      <label>Email</label>
                  </div>

                  <div className='inputBox'>
                      <input onChange={onChange} value={password} type="password" id="password"  autoComplete="off" required/>
                      <label>Password</label>
                  </div>

                  <div className='inputBox'>
                      <input onChange={onChange} value={confirmPassword} type="password" id="confirmPassword"  autoComplete="off" required/>
                      <label>Confirm Password</label>
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

export default Signup
