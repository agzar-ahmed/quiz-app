import React,{ useState, useEffect} from 'react';
import Logout from '../Logout'
import Quiz from '../Quiz'
import Loader from '../Loader'


function Welcome(props) {

const [userSession, setUserSession] = useState(null)

useEffect(() => {
  //check if user is authenticated
  //********************************************/
  //get isAuthenticated object from redux store
  //********************************************/
  const isAuthenticated = true

  let listner = isAuthenticated ?
                (setUserSession(isAuthenticated)):(props.history.push('/'))
    // return () => {
    //     listner
    // }
}, [])

const display = () =>
 userSession ? 
    (<div className="quiz-bg">
    <div className='container'>
    <Logout/>
    <Quiz/>
    </div>

    </div>)
    :(
    <Loader message="loading"/>
    )

return (    
    display()
    )
}

export default Welcome
