import "./App.css";
import React from "react";
import { VerifyCertificate } from "./components/VerifyCertificate";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { ThemeProvider } from '@material-ui/core/styles';
import { SignIn } from "./components/SignIn";
import {theme} from './globalTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthenticatedTemplate>
          <VerifyCertificate />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <SignIn />
        </UnauthenticatedTemplate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
