// import createContext, useContext, useState
import { getCurrentUser } from '../services/users';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// create UserProvider - provides context that you are giving
function UserProvider({ children }) {
  const currentUser = getCurrentUser();
  const [user, setUser] = useState(
    currentUser
    // ? { id: currentUser.user_id, username: currentUser.user.email }
    // : {}
  ); // return the Provider

  console.log('user', user);
  console.log('currentUser', currentUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// useUser - the hook that you can use throughout the app
const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be inside the UserProvider wrapper');
  }

  return context;
};

export { UserProvider, useUser };
