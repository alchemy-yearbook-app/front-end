import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Advice from './views/Advice/Advice';
import Yearbook from './views/Yearbook/Yearbook';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Memorybook from './views/Memorybook/Memorybook';
import About from './views/About/About';
// import MemCreateEdit from './views/MemCreateEdit/MemCreateEdit';
import ProfileCreateEdit from './views/ProfileCreateEdit/ProfileCreateEdit';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/advice">
            <Advice />
          </Route>
          <Route exact path="/sign-in">
            <Auth />
          </Route>
          <Route exact path="/sign-up">
            <Auth isSigningUp />
          </Route>
          <Route exact path="/yearbook">
            <Yearbook />
          </Route>
          <Route exact path="/profile/create">
            <ProfileCreateEdit />
          </Route>
          {/* <PrivateRoute exact path="/profile/:id/edit">
            <YearCreateEdit isEditing />
          </PrivateRoute> */}
          {/* <PrivateRoute exact path="/memorybook">
            <Memorybook />
          </PrivateRoute>
          <PrivateRoute exact path="/memorybook/create">
            <MemCreateEdit />
          </PrivateRoute>
          <PrivateRoute exact path="/memorybook/:id/edit">
            <MemCreateEdit isEditing />
          </PrivateRoute> */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
