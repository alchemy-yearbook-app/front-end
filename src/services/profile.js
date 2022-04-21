export const getProfileById = async ({ user_id }) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/v1/profile/${user_id}`,
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

export const createProfile = async ({
  avatar,
  firstName,
  lastName,
  linkedIn,
  github,
  quote,
  company,
  email,
  pronoun,
}) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/profile/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      avatar,
      firstName,
      lastName,
      linkedIn,
      github,
      quote,
      company,
      email,
      pronoun,
    }),
  });
  const data = await res.json();
  return data;
};

export const updateProfile = async ({
  id,
  avatar,
  firstName,
  lastName,
  linkedIn,
  github,
  quote,
  company,
  email,
  pronoun,
}) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/profile/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      id,
      avatar,
      firstName,
      lastName,
      linkedIn,
      github,
      quote,
      company,
      email,
      pronoun,
    }),
  });

  return res.json();
};

export const deleteProfile = async (id) => {
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
