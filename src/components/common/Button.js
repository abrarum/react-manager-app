import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={Styles.buttonStyle}>
            <Text style={Styles.textStyle}>{ children }</Text>
        </TouchableOpacity>
    );
};

const Styles = {
    textStyle: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff',
        fontWeight: '600',
        alignSelf: 'center'
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderColor: '#007aff',
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        borderWidth: 1,
        flex: 1
    }
};

export { Button };

