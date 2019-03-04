import React, { useState, useCallback } from 'react';
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { withStyles, Theme, StyleRules } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppMenuStyles from '../../assets/jss/components/appMenuStyle'
import { sideBarImage } from '../../assets/jss';
import { ModuleRoute } from '../../modules';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { State } from '../../store/config/configureStore';

export interface AppBarProps {
    classes?: any;
    theme: Theme;
    routes?: ModuleRoute[];
    modulePath?: string | string[];
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
}

export function AppMenuRaw(props: AppBarProps) {
    const { classes, isOpen, modulePath, routes, onToggle } = props;
    const [open, setOpen] = useState<boolean>(isOpen);
    const mapStateToProps = useCallback((state: State) => (
        {
            pathname: state.router.location.pathname,
        }),
        [],
    )
    const { pathname } = useMappedState(mapStateToProps);

    function activeRoute(routeName: string) {
        return pathname.indexOf(routeName) > -1 ? true : false;
    }

    function getTitle() {
        var title;
        routes.map((route) => {
            if (modulePath + route.path === pathname) {
                title = route.name;
            }
            return null;
        });
        return title;
    }

    function toggle() {
        onToggle(!open)
        setOpen(!open)
    }

    var links = (
        <List
            className={classNames(classes.list, {
                [classes.listOpen]: open,
            })}
        >
            {routes.map((route: ModuleRoute, index: number) => (
                <NavLink className={classes.item} to={modulePath + route.path} key={index} >
                    <ListItem
                        className={classNames(classes.itemLink, {
                            [classes.inlineItemLink]: !open,
                            [classes.purple]: activeRoute(route.path),
                        })}
                        button={open}
                    >
                        <ListItemIcon className={classes.itemIcon}>{<route.icon />}</ListItemIcon>
                        <ListItemText
                            className={classes.itemText}
                            primary={open ? route.name : null}
                            disableTypography={true} />
                    </ListItem>
                </NavLink>
            ))}
        </List>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton color="inherit"
                        aria-label="Open drawer"
                        onClick={toggle}
                        className={classNames(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {getTitle()}
                    </Typography>
                    <div className={classes.grow} />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: classNames({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton
                        className={classes.itemIcon}
                        onClick={toggle}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <div className={classes.foreground}>
                    {links}
                </div>
                <div
                    className={classes.background}
                    style={{ backgroundImage: "url(" + sideBarImage + ")" }}
                />
            </Drawer>
        </React.Fragment>
    );
}


export const AppMenu = withStyles(AppMenuStyles, { withTheme: true })(AppMenuRaw);