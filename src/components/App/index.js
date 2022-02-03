import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';
import Landing from '../Landing';
import Welcome from "../Welcome";
import Login from "../Login";
import Signup from "../Signup";
import ErrorPage from "../ErrorPage";
import Layout from "../Layout";
import { BrowserRouter as Router, Route,Link, Switch} 
from 'react-router-dom';
import ForgetPassword from "../ForgetPassword";
import { IconContext } from "react-icons";


function App() {
  return ( 
      <Router>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <Header/>
            <Switch>
              < Route exact path="/" component={Landing}/>
              < Route exact path="/welcome" component={Welcome}/>
              < Route exact path="/signup" component={Signup}/>
              < Route path="/login" component={Login}/>
              < Route path="/forgetpassword" component={ForgetPassword}/>
              < Route path="/layout" component={Layout}/>
              < Route path="*" component={ErrorPage}/>
            </Switch>
            <Footer/>
        </IconContext.Provider>         
      </Router>
  );
}

export default App;
