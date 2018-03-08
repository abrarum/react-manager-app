import React, { Component } from 'react';
import { Card, CardSection, Button} from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress(){
        //pulling out input name,phone,shift from inputs
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return(
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
            //{..this.props} means here that we're passing every prop recieved by EmployeeCreate 
            //Component to EmployeeForm
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
    //These are final state, pass it on to the resp. inputs
}

export default connect(mapStateToProps, { employeeUpdate, 
    employeeCreate })(EmployeeCreate);
