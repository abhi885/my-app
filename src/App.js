
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


//import About from './Components/About';
// import {  
//   BrowserRouter as Router,  
//   Switch,  
//   Route
// }   
// from "react-router-dom";  





function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 3000);

  const funcToggle=()=>{
    if(mode=='light'){
      setMode("dark");
      document.body.style.backgroundColor="#9491e3";
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success");
    }
    }
  
  //setMode(dark);
  
  return (
    <>
    {/* <Router> */}
<Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={funcToggle}/>
<Alert alert1={alert}/>
<div className="container my-3">
{/* <Switch>
    <Route exact path="/about">
      <About />
     </Route>  */}
       
    {/* <Route exact path="/"> */}
      <TextForm showAlert1={showAlert} heading="Enter Your Test to Analyze" mode={mode}/>
    {/* </Route> */}
{/* </Switch> */}
</div>
{/* </Router> */}

  </>
         
         

);
{/* <TextForm showAlert1={showAlert} heading="Enter Your Test to Analyze" mode={mode}/> */}
{/* <About/> */}

    
  }


export default App;
