// import createContext, useContext, useState
import { getCurrentUser } from '../services/users';
import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

// create UserProvider - provides context that you are giving
// return the Provider
function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentUser();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div></div>;
  }

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
