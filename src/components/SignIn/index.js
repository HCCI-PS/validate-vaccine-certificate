import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Copyright } from "../Copyright";
import { useStyles } from "./styles";
import HexagonImg from "../../assets/img/hexagon.png"


export const SignIn = (props) => {
    const { instance } = useMsal();
    const classes = useStyles();

    const handleLogin = (instance) => {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.error(e);
      });
    };

    return (
        <Grid
            container
            component="main"
            className={ classes.root }>
            <CssBaseline />
            <Grid
                item
                xs={ false }
                sm={ 4 }
                md={ 7 }
                className={ classes.image } />
            <Grid
                item
                xs={ 12 }
                sm={ 8 }
                md={ 5 }
                component={ Paper }
                className={ classes.login }
                elevation={ 6 }
                square>
                <div className={ classes.paper }>
                    <Avatar className={ classes.avatar }>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        style={ { color: 'white' } }
                        variant="h5">
                        Sign in
                    </Typography>
                    <div className={ classes.logo }>
                        <img
                            src={HexagonImg}
                            width={ 200 }
                            alt="logo" />
                    </div>
                    <form
                        className={ classes.form }
                        noValidate>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }
                            onClick={()=>{ handleLogin(instance)} }>
                            Login with Hexagon
                        </Button>
                        <Box mt={ 5 }>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};
