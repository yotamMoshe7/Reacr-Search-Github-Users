import './HomePage.scss';
import HomePageButton from '../../components/Home-page-button/HomePageButton';

 /**
 * @description Landing page for app.
 */

const HomePage = () => {
  return(
    <div className='wrapper'>
      <div className='home-page'>
      <h1>Welcome To Usertron</h1>
      <h2>In this website you will be able to search for github users</h2>
      <HomePageButton />
    </div>
    </div>
  )
}

export default HomePage;