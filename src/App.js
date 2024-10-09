
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  //Code For Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 3000);

  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");

      //For changing the tab title name
      setInterval(() => {
        document.title = "TextUtils- Dark Mode";

      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now!";

      }, 1000);



    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";

    }


  }

  return (
    <>
    <Router>
      <Navbar title="Arpitha" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Switch>

          {/*  /user--->Component 1
               /users/home----->Component 2  */}

          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils- Word counter, Character counter" mode={mode} />
          </Route>
        </Switch>
        
        {/*<About/>*/}

      </div>
      </Router>

    </>

  );
}

export default App;
