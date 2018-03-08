import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection, Card, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
        //Its like setState to action, the text is send as a parameter to our action.
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }

        return(
            <Button 
                e_buttontextstyle={{ fontSize: 18, color: '#fff' }} 
                e_buttonstyle={{ backgroundColor: '#5bbc2e', borderColor: '#5bbc2e' , marginTop: 30, elevation: 1 }} 
                onPress={this.onButtonPress.bind(this)}> 
                
                LOG IN 
            </Button>
        );
    }

    renderError(){
        if (this.props.error){
            return(
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ Styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return(
            <Card e_cardstyle={{ flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 0,
                backgroundColor: '#fff',
                paddingLeft: 30,
                paddingRight: 30,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0 }}>

                <CardSection e_cardsecstyle={{ borderBottomWidth: 0 }}>
                    <Image
                        style={{ width: 320, height: 80 }} 
                        source={require('../img/logo.png')}

                    />
                </CardSection>

                <CardSection e_cardsecstyle={{ borderBottomWidth: 0 }}>
                <Icon style={Styles.iconStyle} name="person" size={30} color="#000" />

                    <Input
                        placeholder='Email'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        e_labelstyle={{ flex: 0 }}
                        //What is this function bind to?

                        //Actually, this bind function has a 'this' keyword and 'this' keyword is actually a
                        //parameter that is send to the onEmailChange, 'this' is recieved by 'text' param as the
                        //text written in the email field so its binded and called whenever user writes anything
                        //in the field of email.

                        //We're using 'this' onEmailChange is a call me back (callback) function that will invoke 
                        //when input is pressed or not pressed, that is why we're using bind.
                    />
                </CardSection>

                <CardSection e_cardsecstyle={{ borderBottomWidth: 0 }}>
                <Icon style={Styles.iconStyle} name="lock" size={30} color="#000" />
                    <Input 
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        e_labelstyle={{ flex: 0 }}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection e_cardsecstyle={{ borderBottomWidth: 0 }}>
                    {this.renderButton()}
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
    },
    iconStyle: {
        paddingTop: 10
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
  })(LoginForm);