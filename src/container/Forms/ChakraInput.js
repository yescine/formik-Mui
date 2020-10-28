import React from 'react';
import { Field } from 'formik';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, MenuItem } from '@material-ui/core';

function ChakraInput (props) {
  const { label, name, placeholder, validate, options, select, multiline, rows, InputAbormentSt, InputAbormentEnd, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <TextField 
              {...rest} 
              {...field}
              id={name}
              error={meta.touched && form.errors[name]}
              helperText={meta.touched && form.errors[name]}
              placeholder={placeholder}
              select={select}
              multiline={multiline}
              rows={rows}
              InputProps={{
                startAdornment: InputAbormentSt?<InputAdornment position="start">{InputAbormentSt}</InputAdornment>:null,
                endAdornment:InputAbormentEnd?<InputAdornment position="end">{InputAbormentEnd}</InputAdornment>:null,
              }}
              // onBlur={event => console.log('event', event.target.value)}
              variant="outlined" >
              {options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default ChakraInput;
