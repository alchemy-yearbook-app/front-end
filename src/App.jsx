import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Advice from './views/Advice/Advice';
import Yearbook from './views/Yearbook/Yearbook';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/advice">
          <Advice />
        </Route>
        <Route path="/sign-in">
          <Auth />
        </Route>
        <Route path="/sign-up">
          <Auth isSigningUp />
        </Route>
        <Route path="/yearbook">
          <Yearbook />
        </Route>
        <Route path="/yearbook/create">
          <Yearbook />
        </Route>
        <Route path="/yearbook/:id/edit">
          <Yearbook />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
