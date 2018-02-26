import React, { Component } from 'react';
import { Text } from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
    render(){
        const { name } = this.props.employee.item;
        // destructuring of name so the actual is this.props.employee.item.name
        
        return (
            <CardSection>
                <Text style={Styles.titleStyle}>
                    { name }
                </Text>
            </CardSection>
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