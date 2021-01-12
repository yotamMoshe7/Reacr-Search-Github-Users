import React from 'react';
import './Search-result.scss';

/**
 * @description Single user search result.
 */

const SearchResult = (props) => {
  return (
    <div className='row'>
      <div className='avatar-container'> 
        <img className='image' src={props.avatar} alt="Profile_image"/>
      </div>
      
      <div className='name'>
        {props.name? props.name: 'No name'}
      </div> 
      <div className='email'>
        {props.email? props.email: 'No email'}
      </div>
      <div className='description'>
        {props.description? props.description: 'No description'}
      </div>
    </div>
  )
}

export default SearchResult;