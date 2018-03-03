import _ from 'lodash';
import React, {Component} from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';



class EmployeeEdit extends Component {

    state = { showModal: false };
    
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
    //also called as helper methods
    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept(){
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline(){
        this.setState({ showModal: false });
    }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm 
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
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

export default connect(mapStateToProps, {employeeSave, employeeDelete ,employeeUpdate})(EmployeeEdit);
//access to action creator after connecting