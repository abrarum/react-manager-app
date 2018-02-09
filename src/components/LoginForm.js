import React, {Component} from 'react';
import { CardSection, Card, Input, Button } from './common';
import { emailChanged } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
        //Its like setState to action, the text is send as a parameter to our action.
    }
    
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label='Email'
                        placeHolder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        //onEmailChange is a call me back (callback) function that will invoke 
                        //when input is pressed or not pressed
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label='Password'
                        placeHolder='password'
                    />
                </CardSection>

                <CardSection>
                    <Button> Login </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, { emailChanged })(LoginForm);
//since we connect and added { emailChanged } as action, now we can access this.props.emailChanged state.