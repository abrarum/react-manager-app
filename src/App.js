import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyAjHwCvftP1w0nKJTylUQcXAH-rThhZ6sQ',
            authDomain: 'bold-circuit-429.firebaseapp.com',
            databaseURL: 'https://bold-circuit-429.firebaseio.com',
            projectId: 'bold-circuit-429',
            storageBucket: 'bold-circuit-429.appspot.com',
            messagingSenderId: '270696683683'
          };
          firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
