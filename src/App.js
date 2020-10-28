import React from 'react';
import './App.css';
import Youtube from './components/Youtube';
import YoutubeFormik from './components/YoutubeFormik';
import FormGen from './views/Form.Gen';
import Registration from './views/Registration';


function App () {
  return (
    <>
      <h1>Mui registration</h1>
      <div className="App">
        <Registration/>
      </div>
      <h1>Basic Formik</h1>
      <div className="App">
        {/* <Youtube/> */}
        <YoutubeFormik/>
      </div>
      <h1>Form Gen</h1>
      <div className="App">
        <FormGen/>
      </div>
    </>
      
  );
}

export default App;
