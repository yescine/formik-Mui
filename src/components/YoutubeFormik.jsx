import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ErrorMsg (props){
  return (
    <div style={{color:'red'}}>{props.children}</div>
  );
}
const initialValues={
  name:'best',
  email:'last@last',
  channel:'',
  comments:'',
  address:''
};

const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name:Yup.string().required('required'),
  email: Yup.string().email('invalid email format').required('required!'),
  channel:Yup.string().required('required'),
  comments: Yup.string().min(5, 'min length is 5 char'),
  address: Yup.string().required('required'),

});

function Youtube () {
 
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor='name'>name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component={ErrorMsg} />

        <label htmlFor='email'>email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component={ErrorMsg} />

        <label htmlFor='channel'>channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" component={ErrorMsg} />

        <label htmlFor='address'>address</label>
        <Field name="address" >
          {props => 
            <div>
              <input type='text' id='address' {...props.field} />
              {props.meta.touched && props.meta.error?<div>{props.meta.error}</div>:null}
            </div>}
        </Field>

        <label htmlFor='comments'>comments</label>
        <Field as='textarea' id="comments" name="comments" />
        <ErrorMessage name="comments" >
          {ErrMsg => <div style={{color:'orange'}}>{ErrMsg}</div>}
        </ErrorMessage>

        <button>Submit</button>
      </Form>
    </Formik>
  );
}

export default Youtube;
