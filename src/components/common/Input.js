import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ e_labelstyle, e_viewstyle , e_textstyle, label, value, onChangeText, placeholder, secureTextEntry }) => {
const { inputStyle, labelStyle, containerStyle } = Styles; //destructuring styles
    return (
    <View style={[containerStyle, e_viewstyle]}>
        <Text style={[labelStyle, e_labelstyle]}>{ label }</Text>

        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={[inputStyle,e_textstyle]}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
    );
};

 const Styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
        width: 100,
        height: 50,
        alignSelf: 'flex-end'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

 };

export { Input };
