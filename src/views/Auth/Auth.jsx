import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth, useCurrentUser } from '../../context/UserContext';

export default function Authenticate() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const user = useCurrentUser();
  const { login } = useAuth();

  useEffect(() => {
    if (user?.username) history.replace('/dashboard');
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await login({ username, password });
      history.replace('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="bg-darkpurple text-white h-screen w-full">
        <AuthForm
          onSubmit={handleSubmit}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
        />
      </div>
    </>
  );
}
