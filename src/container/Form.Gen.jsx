  
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer () {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ];
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ];
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
    muiText:'test'
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date()
      .required('Required')
      .nullable(),
    muiText: Yup.string().required('Required for Import'), 
  });
  const onSubmit = values => {
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

  const formGenArr = [
    {control:'input', type:'email', label:'Email', name:'email'},
    {control:'textarea', label:'Description', name:'description'},
    {control:'select', label:'Select a topic', name:'selectOption', options:dropdownOptions},
    {control:'radio', type:'radio', label:'Radio topic', name:'radioOption', options:radioOptions},
    {control:'checkbox', type:'checkbox', label:'Checkbox topics', name:'checkboxOption', options:checkboxOptions},
    {control:'date', label:'Pick a date', name:'birthDate'},
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='TextFieldMui'
            type='text'
            label='Mui Field'
            name='muiText'
            placeholder='test'
            validate={(values) => {
              let errors;
              if (values.length<5)errors='short name';
              return errors;
            }}
          />
          {formGenArr.map((elem, idx) => {
            return (
              <FormikControl
                control={elem.control}
                type={elem.type}
                label={elem.label}
                name={elem.name}
                options={elem.options}
                key={idx}
              />
            );
          })}
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;