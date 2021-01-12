import React, { useState, useEffect } from 'react';
import './SearchPage.scss';
import SearchForm from '../../components/Search-form/SearchForm';
import SearchResultList from '../../components/search-results-list/Search-results-list';
import { refreshPage } from '../../services/github-full-users-data.service';

 /**
 * @description Search users page.
 */

const SearchPage = () => {
  const [inputText, setInputText] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      setSearchValue(inputText);
    } catch (error) {
      console.log(error);
    }
  };

  const onFocus = () => {
    return '';
  };

  // Update service after refresh
  useEffect(() => {
    refreshPage();
  }, []);

  return (
    <div className='search-page'>
      <div className='title'>Find Github users</div>
      <div className='sub-title'>Please enter a Github username</div>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} onFocus={onFocus} />  
      <SearchResultList searchValue={searchValue} />
    </div>
  );
};

export default SearchPage;