import React from 'react';
import Button from '@material-ui/core/Button';
import './SearchForm.scss';

const SearchForm = (props) =>{
  return(
    <div>
        <input
          onChange={props.handleChange}
          type='text'
          placeholder='Enter username'
          onFocus={props.onFocus}
        />
        <Button
          className='button'
          variant='contained'
          color='primary'
          disableElevation
          onClick={props.handleSubmit}
        >
          Search
        </Button>
      </div>
  )
}

export default SearchForm;