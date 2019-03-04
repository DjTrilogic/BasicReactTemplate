import React, { useState, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles, { StyleRules } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core';
import { Configuration, AuthenticationApi } from '../../api/loginServer';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { login } from '../../store/actions/account';
import { State } from '../../store/config/configureStore';
import { Redirect } from 'react-router';


const styles = (theme: Theme): StyleRules => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

const config = new Configuration();
const api = new AuthenticationApi(config, "https://api-debug.octofut.com:8889");

function LoginRaw(props: any) {
    const { classes } = props;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const mapStateToProps = useCallback((state: State) => (
        {
            loggedIn: state.account.loginResponse,
        }),
        [],
    )
    const { loggedIn } = useMappedState(mapStateToProps);

    if (loggedIn) {
        return (
            <Redirect to="/manager/dashboard" />
        )
    }

    function handleSubmit(event: React.FormEvent) {
        setLoading(true);
        api.token({ username, password })
            .then((response) => {
                dispatch(login(response));
            })
            .catch((reason) => {
                console.log(reason);
            })
            .finally(() => {
                setLoading(false);
            })
        event.preventDefault();
    }

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {loading && <div>LOADING...</div>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Email Address</InputLabel>
                        <Input value={username} name="password" autoFocus onChange={(e) => { setUsername(e.target.value) }} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </Paper>
        </main>
    );
}

export const LoginModule = withStyles(styles)(LoginRaw);