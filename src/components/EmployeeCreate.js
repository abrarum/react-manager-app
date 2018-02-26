import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button} from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

    onButtonPress(){
        //pulling out input name,phone,shift from inputs
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name" 
                        placeholder="Haider" 
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555" 
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                        />
                </CardSection>
                <CardSection>
                    <Text style={ Styles.pickerTextStyle }> Shift </Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={text => this.props.employeeUpdate({ prop: 'shift', value: text })}>
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const Styles = {
    pickerTextStyle: {
        fontSize: 18,
      
    }
}

mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
    //These are final state, pass it on to the resp. inputs
}

export default connect(mapStateToProps, { employeeUpdate, 
    employeeCreate })(EmployeeCreate);
