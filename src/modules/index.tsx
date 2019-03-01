
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ComponentClass, FunctionComponent } from 'react';

export interface ModuleRoute {
    path: string,
    name: string,
    icon: any,
    component: ComponentClass | FunctionComponent;
}

export function switchRoutes(routes: ModuleRoute[], modulePath: string) {
    return (
        <Switch>
            {routes.map((route: ModuleRoute, key: number) => {
                return (
                    <Route
                        path={modulePath + route.path}
                        component={route.component}
                        key={key}
                    />
                );
            })}
        </Switch>
    );
}