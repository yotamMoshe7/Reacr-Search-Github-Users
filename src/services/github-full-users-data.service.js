import config from '../config/config.json';
import axios from 'axios';
import { createFilterArray } from './github-filter-users-data.service';

/**
 * @description Function that make HTTP request for getting list of Github
 * users.
 */

let pageNum = 1;
let search_username;

export const getListOfUsers = async (currentInputSearch) => {
  const PAGINATION = 10;

  [pageNum, search_username] = nextPageOrNewRequest(
    currentInputSearch,
    pageNum,
    search_username
  );

  try {
    const uri = `${config.urls.githubUsersSearch}${search_username} in:user&page=${pageNum}&per_page=${PAGINATION}`;

    let githubResponse = await axios.get(uri);

    if (githubResponse.status !== 200) {
      console.log('No Github profile found');
      return null;
    }

    let usersArray = githubResponse.data.items;

    let resultsCount = githubResponse.data.total_count;
    let filteredUsersArray = await createFilterArray(usersArray);

    if (filteredUsersArray === undefined) {
      filteredUsersArray = null;
    }

    let result = {
      resultsCount: resultsCount,
      users: filteredUsersArray,
    };

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const nextPageOrNewRequest = (request, pageNum, search_username) => {
  if (request !== search_username) {
    pageNum = 1;
    search_username = request;
  } else {
    pageNum++;
  }
  return [pageNum, search_username];
};

export const refreshPage = () => {
  search_username = '';
};
