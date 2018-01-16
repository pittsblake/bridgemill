import React, { Component } from 'react';
import Modal from 'react-modal'
import styled from 'styled-components'

const customStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'charcoal',
        padding: '20px 100px 50px 100px',
    }
};

const InputField = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`
const Header = styled.h1`
    
`

class AppointmentForm extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    //onAfterOpen={afterOpenFn}
                    onRequestClose={this.props.closeModal}
                    //closeTimeoutMS={n}
                    style={customStyle}
                    contentLabel="Modal"
                >
                    <h1>Make an appointment!</h1>
                    <form action="">

                        <label htmlFor="name">Name:</label>
                        <br />
                        <InputField type="text" name="name" placeholder="Your name" /><br />

                        <label htmlFor="pet">Pet's Name:</label>
                        <br />
                        <InputField type="text" name="pet" placeholder="Pet's name" /><br />


                        <label htmlFor="patient">Patient type:</label>
                        <br/>
                        <Select id="patient" name="patient">
                            <option value="new">New Patient</option>
                            <option value="current">Current Patient</option>
                        </Select>

                        <label htmlFor="phone">Phone:</label>
                        <br />
                        <InputField type="text" name="phone" placeholder="Your phone number" /><br />
                        <label htmlFor="mail">E-Mail:</label>
                        <br />

                        <InputField type="text" name="mail" placeholder="Your email" /><br />
                        <label htmlFor="doctor">Choose your Doctor:</label>
                        <br />
                        <Select id="doctor" name="doctor">
                            <option value="alvey">Dr. Alvey</option>
                            <option value="gilvarry">Dr. Gilvarry</option>
                        </Select>

                        <label htmlFor="date">Date Preferred</label>

                        <br/>
                        <label htmlFor="comment">Comment</label> <br />
                        <textarea id="comment" name="comment" cols='40' rows='5' /><br />
                    </form>
                </Modal>
            </div>
        );
    }
}

export default AppointmentForm;