import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router'

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
