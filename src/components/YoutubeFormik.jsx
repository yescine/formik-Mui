import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
        <ErrorMessage name="name" />

        <label htmlFor='email'>email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" />

        <label htmlFor='channel'>channel</label>
        <Field type="text" id="channel" name="channel" />
        <ErrorMessage name="channel" />

        <button>Submit</button>
      </Form>
    </Formik>
  );
}

export default Youtube;
