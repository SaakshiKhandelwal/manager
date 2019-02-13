import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent =() => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="PLEASE LOGIN" initial />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="ADD"
                        onRight={ () => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="EMPLOYEE LIST" 
                        initial/>
                    <Scene key="employeeCreate" component={EmployeeCreate} title="CREATE EMPLOYEE"/>
                    <Scene key="employeeEdit" component={EmployeeEdit} title="EDIT EMPLOYEE"/>
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;