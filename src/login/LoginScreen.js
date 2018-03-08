import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends React.Component {
    render(){
        return(
            <View>
                <Input
                    placeholder='INPUT WITH ICON'
                    icon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                />
            </View>
        );
    }
}

export default LoginScreen;
