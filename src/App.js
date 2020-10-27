import React from 'react';
import './App.css';
import Youtube from './components/Youtube';
import YoutubeFormik from './components/YoutubeFormik';
import FormGen from './container/Form.Gen';


function App () {
  return (
    <>
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
