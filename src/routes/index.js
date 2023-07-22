import { Route, Switch, useLocation, Redirect } from 'wouter';

import SpinnerTest from 'screens/spinner-test';
import TooltipTest from 'screens/tooltip-test';
import TabTest from 'screens/tab-test';
import ErrorPage from 'screens/error/404';
import RippleTest from 'screens/ripple-test';

const Routes = () => {
    const [location, setLocation] = useLocation();
    const _getTabsParams = (params) => {
        console.log('params :>> ', params);
        let tab = 'home_tab';
        if (!params) tab = 'home_tab';
        else if (params === 'profile') tab = 'profile';
        else if (params === 'comment') tab = 'comment';
        // else setLocation('/404');
        return tab;
    };
    return (
        <Switch>
            <Route path="/" component={SpinnerTest} />
            <Route path="/spinner" component={SpinnerTest} />
            <Route path="/tooltip" component={TooltipTest} />
            <Route path="/mat-button" component={RippleTest} />
            <Route path="/tab/:tabs?">
                {(params) => <TabTest params={_getTabsParams(params.tabs)} />}
            </Route>
            {/* redirection to another page */}
            {/* <Redirect to="/" /> */}
            {/* 404 redirection */}
            <Route component={ErrorPage} />
        </Switch>
    );
};

export default Routes;
