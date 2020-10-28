import React from 'react';
import { Field } from 'formik';
// import {
//   Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage
// } from '@chakra-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';

function ChakraInput (props) {
  const { label, name, placeholder, validate, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <TextField 
            id={name}
            error={form.errors[name]}
            helperText={form.errors[name]}
            placeholder={placeholder}
            {...rest} 
            {...field}
            variant="outlined" />
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraInput;
