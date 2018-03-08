import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return(
    <Router>
        <Scene key="root" hideNavBar>
        <Scene key="auth" hideNavBar>
            <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
            <Scene 
                titleStyle={Styles.navigationTitle} 
                key="employeeList" 
                component={EmployeeList} 
                title="Employees" 
                rightTitle="Add"
                onRight={() => Actions.employeeCreate()}
                initial
            />
            <Scene 
                titleStyle={Styles.navigationTitle}
                key="employeeCreate"
                component={EmployeeCreate}
                title="Create Employee"
            />
            <Scene 
                titleStyle={Styles.navigationTitle}
                key="employeeEdit"
                component={EmployeeEdit}
                title="Edit Employee"
            />
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
