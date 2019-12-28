import axios from "axios";
// eslint-disable-next-line
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
// eslint-disable-next-line
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
// eslint-disable-next-line
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

// eslint-disable-next-line
const token = 'RGAPI-c3cb11ba-f52d-45b2-9a83-1b65f3bea607';

export const apiClient = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://br1.api.riotgames.com',
    headers: {
        'Accept-Language': `en-US,en;q=0.9,pt;q=0.8`,
        'User-AgentAccept-Language': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36`,
        'X-Riot-Token': `${token}`,
    },
});
