// import React, { Component } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import Moment from 'react-moment';
// import moment from 'moment';
// import { reduxForm, Field } from 'redux-form';
// import { RadioButton } from 'material-ui/RadioButton';
// import MenuItem from 'material-ui/MenuItem';
// import {
//     Checkbox,
//     RadioButtonGroup,
//     SelectField,
//     TextField,
//     Toggle,
//     DatePicker
// } from 'redux-form-material-ui'


// class ScheduleForm extends Component {
//     render() {
//         return (
//             <div>
//                 <form>
//                     <Field name="username" component={TextField} hintText="Street" />

//                     <Field name="plan" component={SelectField} hintText="Select a plan">
//                         <MenuItem value="monthly" primaryText="Monthly" />
//                         <MenuItem value="yearly" primaryText="Yearly" />
//                         <MenuItem value="lifetime" primaryText="Lifetime" />
//                     </Field>

//                     <Field name="agreeToTerms" component={Checkbox} label="Agree to terms?" />

//                     <Field name="eventDate" component={DatePicker} format={null} hintText="What day is the event?" />

//                     <Field name="receiveEmails" component={Toggle} label="Please spam me!" />

//                     <Field name="bestFramework" component={RadioButtonGroup}>
//                         <RadioButton value="react" label="React" />
//                         <RadioButton value="angular" label="Angular" />
//                         <RadioButton value="ember" label="Ember" />
//                     </Field>
//                 </form>
//             </div>
//         );
//     }
// }

// ScheduleForm = reduxForm({
//     form: 'scheduleForm'
//   })(ScheduleForm)

// export default ScheduleForm;