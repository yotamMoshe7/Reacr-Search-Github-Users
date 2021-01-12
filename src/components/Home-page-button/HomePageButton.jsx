import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

/**
 * @description Button that link homepage with search page.
 */

const HomePageButton = () =>{
  return(
    <Button
        className='go-to-search-page-button'
        style={{
          height: '3rem',
          textTransform: 'none',
          fontSize: '1.3rem',
          fontFamily:'Architects Daughter, cursive'
        }}
        variant='contained'
        color='primary'
        component={ Link }
        to="/search">
          Lets Search for some users
      </Button>
  )
}

export default HomePageButton;