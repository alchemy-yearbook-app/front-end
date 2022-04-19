export const getProfile = async (user_id) => {
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

export const addProfile = async ({
  avatar,
  first_name,
  last_name,
  linked_in,
  github,
  quote,
  company,
  email,
}) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/profile/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      avatar,
      first_name,
      last_name,
      linked_in,
      github,
      quote,
      company,
      email,
    }),
  });

  return res.json();
};

export const updateProfile = async ({
  id,
  avatar,
  first_name,
  last_name,
  linked_in,
  github,
  quote,
  company,
  email,
}) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/profile/${profile.id}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({
        id,
        avatar,
        first_name,
        last_name,
        linked_in,
        github,
        quote,
        company,
        email,
      }),
    }
  );

  return res.json();
};

export const deleteProfile = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/profile/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
};
