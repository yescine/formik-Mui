import React from 'react';
import { Field } from 'formik';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import TextError from '../Forms/TextError';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import { Checkbox, InputAdornment, MenuItem, Radio, RadioGroup, Slider } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export function TexFieldMui (props) {
  const { label, name, validate, options, InputAbormentSt, InputAbormentEnd, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl fullWidth={rest.type!=='email'&&!InputAbormentSt}>
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

export function CheckBoxMuiGroup (props) {
  const { name, label, validate, options, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl>
            <FormLabel component="label" htmlFor={name}>{label}</FormLabel>
            <FormGroup>
              {options.map(option => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox 
                        {...rest} 
                        {...field}
                        name={option.value} 
                        checked={form.values[name].includes(option.value)}
                        onChange={event => {
                          let result = form.values[name];
                          if (event.target.checked){
                            if (!result.includes(option.value))result.push(option.value);
                            form.setFieldValue(name, result);
                          } else {
                            result = result.filter(elem => elem !== option.value);
                            form.setFieldValue(name, result);
                          }
                        }}
                        color='primary'
                      />}
                    label={option.key}
                  />
                );
              })}
            </FormGroup>            
            <FormHelperText>
              <TextError>{meta.touched && form.errors[name]}</TextError>
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export function RadioButtonMui (props) {
  const { name, label, validate, options, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <RadioGroup 
              {...rest} 
              {...field}
            >
              {options.map(option => (
                <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
              ))}
            </RadioGroup>
            <FormHelperText>
              <TextError>{meta.touched && form.errors[name]}</TextError>
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export function DatePickerMui (props) {
  const { name, label, validate, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDatePicker
                {...rest} 
                {...field}
                margin="normal"
                id={name}
                label={label}
                format="MM/dd/yyyy"
                onChange={date => form.setFieldValue(name, date, true)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <FormHelperText>
              <TextError>{meta.touched && form.errors[name]}</TextError>
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export function TimePickerMui (props) {
  const { name, label, validate, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardTimePicker
                {...rest} 
                {...field}
                margin="normal"
                id={name}
                label={label}
                onChange={time => form.setFieldValue(name, time, true)}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>
            <FormHelperText>
              <TextError>{meta.touched && form.errors[name]}</TextError>
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
}

export function SliderMui (props) {
  const { name, label, validate, ...rest } = props;
  return (
    <Field validate={validate?validate:null} name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl fullWidth>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Slider
              {...rest} 
              {...field}
              id={name}
              name={name}
              value={form.values[name]}
              onChange={(event, value) => form.setFieldValue(name, value, true)}
              valueLabelDisplay="auto"
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