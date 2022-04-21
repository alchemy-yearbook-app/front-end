import './App.css'; /* Global CSS */
import styles from './App.module.css'; /* CSS Modules */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Yearbook from './views/Yearbook/Yearbook';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Memorybook from './views/Memorybook/Memorybook';
import About from './views/About/About';
import MemCreateEdit from './views/MemCreateEdit/MemCreateEdit';
import ProfileCreateEdit from './views/ProfileCreateEdit/ProfileCreateEdit';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar/Navbar';
import AlumAdvice from './views/AlumAdvice/AlumAdvice';
import AlumAdviceCreate from './views/AlumAdviceCreate/AlumAdviceCreate';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <Auth />
          </Route>
          <Route exact path="/yearbook">
            <Yearbook />
          </Route>
          <Route exact path="/profile/create">
            <ProfileCreateEdit />
          </Route>
          <Route exact path="/advice/">
            <AlumAdvice />
          </Route>
          <Route exact path="/advice/create">
            <AlumAdviceCreate />
          </Route>
          {/* <PrivateRoute exact path="/profile/:id/edit">
            <YearCreateEdit isEditing />
          </PrivateRoute> */}
          <Route exact path="/memorybook">
            <Memorybook />
          </Route>
          <Route exact path="/memorybook/create">
            <MemCreateEdit />
          </Route>
          {/* <PrivateRoute exact path="/memorybook/:id/edit">

            <MemCreateEdit isEditing />
          </PrivateRoute> */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
