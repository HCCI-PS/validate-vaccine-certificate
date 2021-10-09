import React from "react";
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import HexagonImg from "../../assets/img/hexagon.png"
import { useStyles } from "./styles";
import { Avatar } from "@material-ui/core";
import { SignOut } from "../SignOut";

export const TopBar = ({user, avatar})=>{
    const classes = useStyles();

    return (
      <div className={classes.grow}>
        <AppBar
          position="fixed"
          elevation={1}
          className={classes.topBar}
          color="default"
        >
          <Grid container justifyContent="space-between">
            <Grid item>
                <div className={classes.logo}>
                    <img src={HexagonImg} style={{marginTop: "10px"}} className="banner-img" alt="Hexagon Logo" width="200"/>
                </div>
                </Grid>
                <Grid item>
                <div className={classes.userDetail}>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    // onClick={handleProfileClick}
                    color="inherit"
                  >
                    <Avatar
                      alt={user.displayName}
                      user={user.email} src={avatar}
                    />
                    {/* <Avatar user={ user.email } /> */}
                  </IconButton>
                  <SignOut/>
                </div>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
};
