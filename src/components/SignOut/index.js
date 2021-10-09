import React from "react";
import { useMsal } from "@azure/msal-react";
import { IconButton } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOut = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
  };

  return (
    <IconButton
    aria-label="logout"
    title="Logout"
    color="secondary"
    onClick={ handleLogout }
  >
    <ExitToAppIcon />
  </IconButton>    
  );
};
