import _ from 'lodash';
import React, {Component} from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount(){
        //since employeeUpdate excepts separate prop name and value, we use lodash _.each method.
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
        //the this.props.employee is recieved from listitem
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
            </Card>
            //{..this.props} means here that we're passing every prop recieved by EmployeeCreate 
            //Component to EmployeeForm
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeSave, employeeUpdate})(EmployeeEdit);
//access to action creator after connecting