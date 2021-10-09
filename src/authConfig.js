export const msalConfig = {
    auth: {
      clientId: "08411a04-4a58-4b99-b77a-18666beeac96",
      authority: "https://login.microsoftonline.com/1b16ab3e-b8f6-4fe3-9f3e-2db7fe549f6a/",
      redirectUri: window.location.origin+"/validate-vaccine-certificate",
      socketUri: window.location.hostname === 'localhost' ? 'http://localhost:3000/validate-vaccine-certificate' : window.location.origin+"/validate-vaccine-certificate",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphUserAvatarEndpoint: (user) => `https://graph.microsoft.com/v1.0/users/${user}/photo/$value`
  };