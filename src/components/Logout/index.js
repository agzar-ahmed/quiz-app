import React ,{useState , useEffect} from 'react';
import ReactTooltip from 'react-tooltip';

function Logout() {

  const [checked, setChecked] = useState(false)
  useEffect(() => {
      if(checked){
         console.log("Déconnexion")
      }
     console.log(checked,'checked value')
  },[checked])

  const handelChange =(e)=>{ 
     setChecked(e.target.checked)
  }
    return (
        <div className="logoutContainer">
            <label className='switch' data-tip="Logout">
                <input 
                        type="checkbox"
                        checked={checked}
                        onChange={handelChange}
                />
                <span className="slider round"></span>
            </label>
            <ReactTooltip place="left" effect="solid" />
        </div>
    )
}

export default Logout
