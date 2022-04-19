export const getProfile = async () => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/profile/${profile.id}`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return res.json();
  } catch (error) {
    return null;
  }
};

export const addProfile = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/profile/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });

  return res.json();
};

export const updateProfile = async () => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/profile/${profile.id}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    }
  );

  return res.json();
};

export const deleteProfile = async () => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/profile/${profile.id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    }
  );

  return res.ok;
};
