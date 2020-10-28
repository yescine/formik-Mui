import React from 'react';
import { Field } from 'formik';

import TextError from '../Forms/TextError';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { Checkbox, InputAdornment, MenuItem } from '@material-ui/core';

export function TexFieldMui (props) {
  const { label, name, validate, options, InputAbormentSt, InputAbormentEnd, ...rest } = props;
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

export function CheckBoxMuiBool (props) {
  const { name, label, validate, placeholder, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  {...rest} 
                  {...field}
                  name={name}
                  color="primary"
                />
              }
              label={placeholder}
            />
            <FormHelperText>
              <TextError>{meta.touched && form.errors[name]}</TextError>
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}