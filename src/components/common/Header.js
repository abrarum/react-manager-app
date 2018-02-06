//Calling libraries first

import React from 'react';
import { Text, View } from 'react-native';

//Create a component

const Header = (gots) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {gots.headerText} </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 2,
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      height: 60,
      shadowOpacity: 0.2,
    },
    textStyle: {
        fontSize: 20,
        color: '#000'   
    }
};
//exporting component
export { Header };
