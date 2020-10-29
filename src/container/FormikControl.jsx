import React from 'react';
import Input from './Forms/Input';
import Textarea from './Forms/Textarea';
import Select from './Forms/Select';
import RadioButtons from './Forms/RadioButtons';
import CheckboxGroup from './Forms/CheckboxGroup';
import DatePicker from './Forms/DatePicker';
import {TexFieldMui, CheckBoxMuiBool, CheckBoxMuiGroup, RadioButtonMui} from './Forms/MaterialUiInput';

function FormikControl (props) {
  const { control, ...rest } = props;
  switch (control) {
  case 'input':
    return <Input {...rest} />;
  case 'textarea':
    return <Textarea {...rest} />;
  case 'select':
    return <Select {...rest} />;
  case 'radio':
    return <RadioButtons {...rest} />;
  case 'checkbox':
    return <CheckboxGroup {...rest} />;
  case 'date':
    return <DatePicker {...rest} />;
  case 'TextFieldMui':
    return <TexFieldMui {...rest} />; 
  case 'CheckBoxMuiBool':
    return <CheckBoxMuiBool {...rest} />;  
  case 'CheckBoxMuiGroup':
    return <CheckBoxMuiGroup {...rest} />;     
  case 'RadioButtonMui':
    return <RadioButtonMui {...rest} />;       
  default:
    return null;
  }
}

export default FormikControl;