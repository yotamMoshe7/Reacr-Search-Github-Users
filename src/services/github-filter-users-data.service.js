import config from '../config/config.json';
import axios from 'axios';

/**
 * @description After getting array of users with full data, this function *  make another HTTP request for each user for getting missing data
 *  and filter this data.
 */

export const createFilterArray = async function (usersArray) {
  let filteredArray = [];
  let filteredUser;

  try {
    for (let i in usersArray) {
      const uri = `${config.urls.filtersUsersSearch}${usersArray[i].login}`;
      axios.defaults.headers.common['Authorization'] =
        process.env.REACT_APP_GITHUB_TOKEN;

      const gitHubResponse = await axios.get(uri);
      let response = gitHubResponse.data;

      filteredUser = {
        userName: response.login,
        email: response.email,
        name: response.name,
        avatar: response.avatar_url,
        description: response.bio,
      };

      filteredArray.push(filteredUser);
    }
    return filteredArray;
  } catch (error) {
    console.log(error);
  }
};
