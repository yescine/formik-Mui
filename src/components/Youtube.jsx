import React from 'react';
import {useFormik} from 'formik';
function Youtube () {
  const formik = useFormik({
    initialValues:{
      name:'best',
      email:'last@last',
      channel:'none'
    },
    onSubmit:(values)=>{
      console.log(values);
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
        <label htmlFor='email'>email</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        <label htmlFor='channel'>channel</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Youtube;
