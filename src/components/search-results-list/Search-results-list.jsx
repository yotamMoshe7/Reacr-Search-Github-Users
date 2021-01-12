import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchResult from '../search-result/Search-result';
import './Search-results-list.scss';
import { getListOfUsers } from '../../services/github-full-users-data.service';

/**
 * @description All users result from search.
 */

const SearchResultList = (props) => {
  const [usersArray, setUsersArray] = useState([]);
  const [numOfResults, setNumOfResults] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if(props.searchValue !== ''){
      showOrHideSearchResult("none");
      setUsersArray([]);
      setLoading(true);
    }
  },[props.searchValue]);

  useEffect( () => {
    const fetchData = async () => {
      if(isLoading){
        const res = await getListOfUsers(props.searchValue);

        if (res.users === null) {
          // Show error text
          document.getElementById("num-of-search-results").innerHTML = "Server error";
          showOrHideSearchResult("block");
          setUsersArray([]);
          return;
        }

        // Show number of search results label
        showOrHideSearchResult("block");

        setUsersArray(usersArray.concat(res.users));
        setNumOfResults(res.resultsCount);
        setLoading(false);
      }   
    }
    fetchData();
  }, [isLoading, props.searchValue, usersArray]);

  const showOrHideSearchResult = (string) =>{
    document.getElementById("num-of-search-results").style.display = string;
  }

  const fetchMoreData = () =>{
    showOrHideSearchResult("block");
    document.getElementById("loading").style.display = "block";
    setLoading(true);
  }

  const createSearchResults = () => {
    let searchResults = [];

    for(var i in usersArray){
      searchResults.push(
        <SearchResult 
        username={usersArray? usersArray[i].userName: ''}
        avatar={usersArray? usersArray[i].avatar: ''}
        name={usersArray? usersArray[i].name: ''}
        email={usersArray? usersArray[i].email: ''}
        description={usersArray? usersArray[i].description: ''} 
        />
      )
    }
    return searchResults;
  }

      return(
        <div>
          <div id='num-of-search-results' className='num-of-results'>
            {numOfResults === 1? `${numOfResults} user found` : `${numOfResults} users found`}
          </div>
          <InfiniteScroll
            dataLength={usersArray.length}
            next={fetchMoreData}
            hasMore={true}
            loader=
            {<div id='loading' className='load'>
              <h4>Loading More Users...</h4>
            </div>}
          >     
          {createSearchResults()}     
          </InfiniteScroll>
      </div>
      ) 
  }

export default SearchResultList;