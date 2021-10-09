import { graphConfig } from "./authConfig";
/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

export async function GetUserAvatar(accessToken, user) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Content-Type", "image/jpeg");

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphUserAvatarEndpoint(user), options)
    .then((response) => {
      if (response != null && response.ok) {
        response.blob().then((data) => {
          if (data !== null) {
            window.URL = window.URL || window.webkitURL;
            const result = window.URL.createObjectURL(data);
            return result;
          }
        });
      } else {
        throw new Error("Profile image not found");
      }
    })
    .catch((error) => console.log(error));
}
