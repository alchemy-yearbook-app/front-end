import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import AuthForm from '../../components/AuthForm/AuthForm';
// import { signIn } from '../../services/users';

export default function Authenticate() {
  const [setUsername] = useState();
  const [email, setEmail] = useState('');
  // const [error, setError] = useState('');
  const history = useHistory();
  const user = useUser();
  // const { login } = useAuth();

  useEffect(() => {
    if (user?.username) history.replace('/dashboard');
  }, []);

  // const handleSubmit = async (event) => {
  //   try {
  //     // event.preventDefault();
  //     // await login({ username, email });
  //     const user = await signIn();
  //     setUsername(user);
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  return (
    <>
      <div className="bg-darkpurple text-white h-screen w-full">
        <a href="http://localhost:7890/api/v1/github/login">
          Login with github
        </a>
        <AuthForm />
      </div>
    </>
  );
}
