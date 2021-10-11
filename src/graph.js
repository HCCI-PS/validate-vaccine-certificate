import axios from "axios";
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

  const options = {
    responseType: 'arraybuffer',
    headers: headers
  };

  var imageType = "image/jpeg"  

  var response = await axios.get(graphConfig.graphUserAvatarEndpoint(user), options);
  var imageBytes = Buffer.from(response.data).toString('base64');
  var imageSrc = `data:${imageType};base64,${imageBytes}`;
  return imageSrc;
}
