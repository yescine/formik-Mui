import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../container/FormikControl';

const initialValues = {
  username:'',
  email: '',
  password:'',
  confirmPassword:'',
  confirmPasswordTest:''

};

function Registration () {

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('not valid email format').required('Required'),
    password: Yup.string().required('Password Required'),
    
  });
  const validateConfirmPassword = (formik) => {
    let errors;
    console.log('validate', formik);
    if (!formik.values['password'])errors='please confirm your password';
    if (formik.values['password']!==formik.values['confirmPassword'])errors='password doesn\'t match';
    return errors;

  };
  const onSubmit = values => {
    console.log('Form data', values);
  };

  const formGenArr = [
    {control:'TextFieldMui', type:'text', label:'User name', name:'username', placeholder:'name'},
    {control:'TextFieldMui', type:'password', label:'Password', name:'password'},
    {control:'TextFieldMui', type:'password', label:'Confirm Password', name:'confirmPassword', validate:validateConfirmPassword},
  
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          {formGenArr.map((elem, idx) => {
            return (
              <FormikControl
                control={elem.control}
                type={elem.type}
                label={elem.label}
                name={elem.name}
                validate={elem.validate?()=>elem.validate(formik):null}
                key={idx}
              />
            );
          })}
          {/* <FormikControl
            control='TextFieldMui'
            type='password'
            label='password'
            name='password'
          />
          <FormikControl
            control='TextFieldMui'
            type='password'
            label='test Confirm'
            name='confirmPasswordTest'
            validate={() => {
              let errors;
              console.log('formik erro',formik)
              if (formik.values['password']!==formik.values['confirmPasswordTest'])errors='password doesn\'t match';
              return errors;
            }}
          /> */}
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default Registration;
