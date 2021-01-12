import HomePage from '../../pages/homePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';
import { BrowserRouter as Router,
  Redirect,
  Route,
  Switch } from 'react-router-dom';

  /**
 * @description For app routes management.
 */

const AppRouter = () => {
  return(
    <Router>
    <Switch>
      <Route exact path = "/" component = { HomePage }/>  
      <Route exact path = "/search" component = { SearchPage }/> 
      <Redirect from="*" to="/" />
    </Switch> 
  </Router>
  )
}

export default  AppRouter;