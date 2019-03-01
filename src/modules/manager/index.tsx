import React, { useState } from 'react';
import { AppMenu } from '../../components/appMenu';
import routes from './routes'
import { switchRoutes } from '..';
import { withStyles } from '@material-ui/core';
import ManagerModuleStyles from '../../assets/jss/modules/managerStyle';
import classNames from 'classnames';

const modulePath = "/manager";
const moduleSwitch = switchRoutes(routes, modulePath)

export function ManagerModuleRaw(props: any) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const { classes } = props;
    return (
        <div className={classes.wrapper}>
            <AppMenu routes={routes} modulePath={modulePath} isOpen={isMenuOpen} onToggle={(isOpen: boolean) => { setIsMenuOpen(isOpen) }} />
            <div className={classNames(classes.mainPanel, { [classes.shrinkedMainPanel]: !isMenuOpen })}>
                <div className={classes.content}>
                    {moduleSwitch}
                </div>
            </div>
        </div>
    )
}

export const ManagerModule = withStyles(ManagerModuleStyles)(ManagerModuleRaw);