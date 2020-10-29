import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../container/FormikControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const initialValues = {
  username:'qwe',
  email: 'dev@ex.com',
  password:'qwe',
  confirmPassword:'qwe',
  status:'intern',
  description:'',
  isAdmin:false,
  feature:['gantt'],
  theme:'dark',
  birthDay:new Date(),
  timeSt:new Date()
};

const statusOptions=[
  {key:'engineer', value:'engineer'},
  {key:'manager', value:'manager'},
  {key:'intern', value:'intern'},  
];
const featureOptions=[
  {key:'timeLine', value:'timeLine'},
  {key:'kanban', value:'kanban'},
  {key:'gantt', value:'gantt'},  
];

const themeOptions=[
  {label:'Dark', value:'dark'},
  {label:'Light', value:'light'},
  {label:'Blue', value:'blue'},  
];

function Registration () {

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('not valid email format').required('Required'),
    password: Yup.string().required('Password Required'),
    isAdmin: Yup.bool().required('required status')
    
  });
  const validateConfirmPassword = (formik) => {
    let errors;
    if (!formik.values['password'])errors='please confirm your password';
    if (formik.values['password']!==formik.values['confirmPassword'])errors='password doesn\'t match';
    return errors;

  };
  const onSubmit = values => {
    console.log('Form data', values);
  };

  const formGenArr = [
    {control:'TextFieldMui', type:'text', label:'User name', name:'username', InputAbormentSt:'Mr'},
    {control:'TextFieldMui', type:'email', label:'Email', name:'email', placeholder:'dev@ex.com'},
    {control:'TextFieldMui', type:'password', label:'Password', name:'password'},
    {control:'TextFieldMui', type:'password', label:'Confirm Password', name:'confirmPassword', validate:validateConfirmPassword},
    {control:'TextFieldMui', select:true, label:'Status', name:'status', options:statusOptions},
    {control:'TextFieldMui', type:'text', multiline:true, rows:3, label:'Description', name:'description'},
    {control:'CheckBoxMuiBool', label:'Management status',placeholder:'Admin ?', name:'isAdmin'},
    {control:'CheckBoxMuiGroup', label:'Management feature', name:'feature', options:featureOptions},
    {control:'RadioButtonMui', label:'Choose Theme', name:'theme', options:themeOptions},
    {control:'DatePickerMui', label:'Date of Birth', name:'birthDay'},
    // {control:'TimePickerMui', label:'Time To Start', name:'timeSt'},
    
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form style={{padding:'1rem'}}>
          <Grid container direction="row" justify="space-between" alignItems="center" spacing={1}>
            {formGenArr.map((elem, idx) => {
              return (
                <Grid item xs={12} key={idx} >
                  <FormikControl
                    {...elem}
                    validate={elem.validate?() => elem.validate(formik):null}
                  />
                </Grid>    
              );
            })}
            <Grid item xs={12} >
              <Button color='primary' variant='contained' type='submit'>Submit</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default Registration;
