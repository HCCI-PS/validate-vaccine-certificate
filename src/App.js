import "./App.css";
import React from "react";
import { VerifyCertificate } from "./components/VerifyCertificate";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PageLayout } from "./components/PageLayout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageLayout>
          <AuthenticatedTemplate>
            <VerifyCertificate />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
        </PageLayout>
      </div>
    </Provider>
  );
}

export default App;
