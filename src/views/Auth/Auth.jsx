import React from 'react';
// import { useUser } from '../../context/UserContext/UserContext';
import AuthForm from '../../components/Authform/AuthForm';
import { useHistory } from 'react-router-dom';
// import { signUpUser, signInUser } from '../../services/users';

export default function Auth() {
  // const { setUser } = useUser();
  // const history = useHistory();

  // const handleAuth = async (email, password) => {
  //   try {
  //     // if you are signing up, use signUp services function and push to confirm email
  //     if (isSigningUp) {
  //       await signUpUser(email, password);
  //       history.replace('/sign-in');
  //     } else {
  //       // signing in, set the current user with the API call response.
  //       const resp = await signInUser(email, password);
  //       setUser({ id: resp.id, email: resp.email });
  //       // history.replace because you don't want to go back to log in page after you logged in, sends user to the yearbook
  //       history.replace('/yearbook');
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  return (
    <>
      <div className="bg-darkpurple text-white h-screen w-full">
        <AuthForm
        // onSubmit={handleAuth}
        // label={isSigningUp ? 'Sign Up' : 'Sign In'}
        // isSigningUp={isSigningUp}
        />
      </div>
    </>
  );
}
