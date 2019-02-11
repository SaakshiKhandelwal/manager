import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        
        const config = {
            apiKey: 'AIzaSyC2Ei4KVsbX1EL8FldPOsagxiFnV84OOWo',
            authDomain: 'manager-5d3aa.firebaseapp.com',
            databaseURL: 'https://manager-5d3aa.firebaseio.com',
            projectId: 'manager-5d3aa',
            storageBucket: 'manager-5d3aa.appspot.com',
            messagingSenderId: '1078511434974'
          };
          firebase.initializeApp(config);
    };

    render() {

        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={ store }>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
