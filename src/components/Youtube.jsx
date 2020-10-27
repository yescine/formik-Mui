import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup'
const initialValues={
  name:'best',
  email:'last@last',
  channel:''
};

const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name:Yup.string().required('required'),
  email: Yup.string().email('invalid email format').required('required!'),
  channel:Yup.string().required('required'),

});
const validate = values => {
  let errors = {};
  if (!values.name)errors.name='required';
  if (!values.email)errors.email='required';
  if (!values.channel)errors.channel='required';
  return errors;
};

function Youtube () {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>name</label>
        <input type="text" id="name" name="name" {...formik.getFieldProps('name')}/>
        {formik.touched.name&&formik.errors.name?<div style={{color:'red'}} >{formik.errors.name}</div>:null}

        <label htmlFor='email'>email</label>
        <input type="email" id="email" name="email" {...formik.getFieldProps('email')} />
        {formik.touched.email&&formik.errors.email?<div style={{color:'red'}} >{formik.errors.email}</div>:null}

        <label htmlFor='channel'>channel</label>
        <input type="text" id="channel" name="channel" {...formik.getFieldProps('channel')} />
        {formik.touched.channel&&formik.errors.channel?<div style={{color:'red'}} >{formik.errors.channel}</div>:null}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Youtube;
