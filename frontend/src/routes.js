import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './public/Login/Login';
import Settings from './private/Settings/Settings';
import Dashboard from './private/Dashboard/Dashboard';
import Orders from './private/Orders/Orders';
import Monitors from './private/Monitors/Monitors';
import Automations from './private/Automations/Automations';
import OrderTemplates from './private/OrderTemplates/OrderTemplates';
import NewOrderTemplate from './private/OrderTemplates/NewOrderTemplate';
import WithdrawTemplates from './private/WithdrawTemplates/WithdrawTemplates';
import Reports from './private/Reports/Reports';
import Symbols from './private/Symbols/Symbols';
import Wallet from './private/Wallet/Wallet';
import WebHooks from './private/WebHooks/WebHooks';
import Strategies from './private/Strategies/Strategies';
import NewOrder from './private/Futures/NewOrder';

function Routes() {

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route {...rest} render={() => {
                return localStorage.getItem("token")
                    ? children
                    : <Redirect to='/' />
            }} />
        )
    }

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login />
            </Route>
            <PrivateRoute path="/settings">
                <Settings />
            </PrivateRoute>
            <PrivateRoute path="/(forders|orders)/:symbol?">
                <Orders />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/monitors">
                <Monitors />
            </PrivateRoute>
            <PrivateRoute path="/automations">
                <Automations />
            </PrivateRoute>
            <PrivateRoute path="/(freports|reports)/">
                <Reports />
            </PrivateRoute>
            <PrivateRoute path="/symbols">
                <Symbols />
            </PrivateRoute>
            <PrivateRoute path="/(orderTemplates|fOrderTemplates)/:symbol?">
                <OrderTemplates />
            </PrivateRoute>
            <PrivateRoute path="/orderTemplate/:orderTemplateId?">
                <NewOrderTemplate />
            </PrivateRoute>
            <PrivateRoute path="/withdrawTemplates/:coin?">
                <WithdrawTemplates />
            </PrivateRoute>
            <PrivateRoute path="/wallet">
                <Wallet />
            </PrivateRoute>
            <PrivateRoute path="/webhooks">
                <WebHooks />
            </PrivateRoute>
            <PrivateRoute path="/strategies">
                <Strategies />
            </PrivateRoute>
            <PrivateRoute path="/futures">
                <NewOrder />
            </PrivateRoute>
        </BrowserRouter>
    )
}

export default Routes;