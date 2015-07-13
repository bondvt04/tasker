import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import { createStore, bindActionCreators } from 'redux';
import Wrapper from './js/components/Wrapper';
import Main from './js/components/Main';
import LoginScreen from './js/components/LoginScreen';
/*import ActionLogs from './js/components/ActionLogs';
import ManageModules from './js/components/ManageModules';
import SetModules from './js/components/SetModules';
import EditModules from './js/components/EditModules';
import AddModules from './js/components/AddModules';*/

var routes = (
    <Route path="/" handler={Wrapper}>
        <DefaultRoute name="login" handler={LoginScreen} />
        <Route name="main" path="main" handler={Main}></Route>
     {/*   <Route name="actionlogs" path="actionlogs" handler={ActionLogs}></Route>
            <Route name="modules" path="modules" handler={ManageModules}>
            <DefaultRoute name="set" handler={SetModules}/>
            <Route name="edit" path="edit" handler={EditModules}></Route>
            <Route name="add" path="add" handler={AddModules}></Route>
        </Route>*/}
    </Route>
);
Router.run(routes, Router.HashLocation, (Root) => {
    React.render(
        <Root />,
        document.getElementById('wrapper')
    );
});

