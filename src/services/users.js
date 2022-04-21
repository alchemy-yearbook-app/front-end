export const getCurrentUser = async () => {
  try {
    // give back user profile
    const res = await fetch(`${process.env.API_URL}/api/v1/github/me`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const user = await res.json();
    return user;
  } catch (error) {
    return null;
  }
};

export const signOut = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/user`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
};
