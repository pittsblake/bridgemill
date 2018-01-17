// import React, { Component } from 'react';
// import Modal from 'react-modal'
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import Moment from 'react-moment';
// import moment from 'moment';
//import DatePicker from 'react-datepicker'
//import 'react-datepicker/dist/react-datepicker.css';
// import { reduxForm, Field } from 'redux-form'
// import { RadioButton } from 'material-ui/RadioButton';
// import MenuItem from 'material-ui/MenuItem'
// import {
//     Checkbox,
//     RadioButtonGroup,
//     SelectField,
//     TextField,
//     Toggle,
//     DatePicker
// } from 'redux-form-material-ui'
//import ScheduleForm from './ScheduleForm';
// import { connect } from 'react-redux'
// import { Provider } from 'react-redux';
//import todoApp from './reducers'
//import App from './components/App'
// import { createStore } from 'redux';

//let store = createStore(todoApp)


// const customStyle = {
//     overlay: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(255, 255, 255, 0.75)'
//     },
    // content: {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     marginRight: '-50%',
    //     overflow: 'auto',
    //     WebkitOverflowScrolling: 'touch',
    //     transform: 'translate(-50%, -50%)',
    //     background: 'rgba(119,136,153,0.9)',
    //     padding: '20px 100px 50px 100px',
    // }
//     content: {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         right: '40px',
//         bottom: '40px',
//         marginRight: '-10%',
//         border: '1px solid #ccc',
//         background: 'rgba(119,136,153,0.9)',
//         overflow: 'auto',
//         WebkitOverflowScrolling: 'touch',
//         borderRadius: '4px',
//         outline: 'none',
//         padding: '20px',
//         transform: 'translate(-50%, -50%)'

//     }
// };

// const InputField = styled.input`
//     width: 100%;
//     padding: 12px 20px;
//     margin: 8px 0;
//     display: inline-block;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     box-sizing: border-box;
    
// `

// const Select = styled.select`
//     width: 100%;
//     padding: 12px 20px;
//     margin: 8px 0;
//     display: inline-block;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     box-sizing: border-box;
// `
// const Label = styled.label`
//     color: ghostwhite;
// `
// const Title = styled.h1`
//     color: ghostwhite;
//     text-align: center;
// `

// class AppointmentForm extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         startDate: moment()
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(date) {
    //     this.setState({
    //         startDate: date
    //     });
    // }


    // render() {
    //     return (
    //         <Provider>
    //             <Modal
    //                 isOpen={this.props.isOpen}
    //                 //onAfterOpen={afterOpenFn}
    //                 onRequestClose={this.props.closeModal}
    //                 //closeTimeoutMS={n}
    //                 style={customStyle}
    //                 contentLabel="Modal"
    //             >
                    {/* <form>
                        <Field name="username" component={TextField} hintText="Street" />

                        <Field name="plan" component={SelectField} hintText="Select a plan">
                            <MenuItem value="monthly" primaryText="Monthly" />
                            <MenuItem value="yearly" primaryText="Yearly" />
                            <MenuItem value="lifetime" primaryText="Lifetime" />
                        </Field>

                        <Field name="agreeToTerms" component={Checkbox} label="Agree to terms?" />

                        <Field name="eventDate" component={DatePicker} format={null} hintText="What day is the event?" />

                        <Field name="receiveEmails" component={Toggle} label="Please spam me!" />

                        <Field name="bestFramework" component={RadioButtonGroup}>
                            <RadioButton value="react" label="React" />
                            <RadioButton value="angular" label="Angular" />
                            <RadioButton value="ember" label="Ember" />
                        </Field>
                    </form> */}

//                     <Title>Make an appointment!</Title>
//                     <form action="mailto:pittsblake1@gmail.com" method="post" enctype="text/plain">

//                         <Label htmlFor="name">Name:</Label>
//                         <br />
//                         <InputField type="text" name="name" placeholder="Your name" />

//                         <br />
//                         <br />

//                         <Label htmlFor="pet">Pet's Name:</Label>
//                         <br />
//                         <InputField type="text" name="pet" placeholder="Pet's name" />

//                         <br />
//                         <br />

//                         <Label htmlFor="patient">Patient type:</Label>
//                         <br />
//                         <Select id="patient" name="patient">
//                             <option value="new">New Patient</option>
//                             <option value="current">Current Patient</option>
//                         </Select>

//                         <br />
//                         <br />

//                         <Label htmlFor="phone">Phone:</Label>
//                         <br />
//                         <InputField type="text" name="phone" placeholder="Your phone number" /><br /> <br />

//                         <Label htmlFor="mail">E-Mail:</Label>

//                         <br />

//                         <InputField type="text" name="mail" placeholder="Your email" /><br /> <br />
//                         <Label htmlFor="doctor">Choose your Doctor:</Label>
//                         <br />
//                         <Select id="doctor" name="doctor">
//                             <option value="alvey">Dr. Alvey</option>
//                             <option value="gilvarry">Dr. Gilvarry</option>
//                         </Select>

//                         <br />
//                         <br />

//                         <Label htmlFor="date">Date Preferred</Label><br /> <br />

                        
//                         <input id='date' type="date" name='date' value='text' />

//                         <br />
//                         <br />

//                         <Label htmlFor="comment">Comment</Label> <br />
//                         <textarea id="comment" name="comment" cols='40' rows='5' /><br />
//                         <br />

//                         <input type="submit" value="Send" />
//                     </form>
//                 </Modal>
//             </Provider>
//         );
//     }
// }

// AppointmentForm = reduxForm({
//     form: 'appointementForm'
// })(AppointmentForm)

// AppointmentForm = connect()(AppointmentForm)

// export default AppointmentForm;