import React, { Component } from 'react';
import { Text, View ,TouchableWithoutFeedback } from 'react-native';
import {CardSection} from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee.item});
        //saving the props first and then assigning it to the variable employee.
    }

    render(){
        const { name } = this.props.employee.item;
        // destructuring of name so the actual is this.props.employee.item.name
        
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={Styles.titleStyle}>
                            { name }
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const Styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;