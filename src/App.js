import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
      var config = {
        apiKey: "AIzaSyBoo_sPDdZ-OAS28S-D0w38AIy0eL2lI2c",
        authDomain: "employeeapp-9e7e6.firebaseapp.com",
        databaseURL: "https://employeeapp-9e7e6.firebaseio.com",
        projectId: "employeeapp-9e7e6",
        storageBucket: "",
        messagingSenderId: "1072988300786"
      };
      firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
        return (
          <Provider store={store}>
            <Router />
          </Provider>
        );
      }
    }
    
    export default App;