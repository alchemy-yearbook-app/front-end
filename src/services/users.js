export const getCurrentUser = async () => {
  try {
    // give back user profile
    const res = await fetch(`${process.env.API_URL}/api/v1/github/login`, {
      credentials: 'include',
    });

    return res.json();
  } catch (error) {
    return null;
  }
};

export const signIn = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/github/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });

  if (!res.ok)
    throw new Error('User must be a part of Alchemy Code Lab organization');

  return res.json();
};

export const signOut = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/user`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
};
