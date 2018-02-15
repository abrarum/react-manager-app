import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return(
    <Router>
        <Scene key="root" hideNavBar>
        <Scene key="auth">
            <Scene titleStyle={Styles.navigationTitle} key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
            <Scene titleStyle={Styles.navigationTitle} key="employee" component={EmployeeList} title="Employees" />
        </Scene>
        </Scene>
    </Router>
    );
};

const Styles = {
    navigationTitle: {
        alignSelf: 'center'
    }
}

export default RouterComponent;
