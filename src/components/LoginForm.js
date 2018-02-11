import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
        //Its like setState to action, the text is send as a parameter to our action.
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        this.props.loginUser( this.props.email, this.props.password );
    }

    renderError(){
        if (this.props.error){
            <View style={{ backgroundColor: 'white' }}>
                <Text style={ Styles.errorTextStyle }>
                    {this.props.error}
                </Text>
            </View>
        }
    }
    
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeHolder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        //What is this function bind to?

                        //Actually, this bind function has a 'this' keyword and 'this' keyword is actually a
                        //parameter that is send to the onEmailChange, 'this' is recieved by 'text' param as the
                        //text written in the email field so its binded and called whenever user writes anything
                        //in the field of email.

                        //We're using 'this' onEmailChange is a call me back (callback) function that will invoke 
                        //when input is pressed or not pressed, that is why we're using bind.
                    />
                </CardSection>

                <CardSection>
                    
                    <Input 
                        secureTextEntry
                        label='Password'
                        placeHolder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                
                {this.renderError()}

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
                </CardSection>
            </Card>
        );
    }
}

const Styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    };
    console.log(state.auth.email);
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
//since we connect and added { emailChanged } as action, now we can access this.props.emailChanged.