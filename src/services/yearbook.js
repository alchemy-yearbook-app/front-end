export async function fetchGithubTeams() {
  const resp = await fetch(
    `${process.env.API_URL}/api/v1/orgs/alchemycodelab/teams/students/teams`
  );
  const data = await resp.json();
  return data;
}

export const fetchYearbookNoProfile = async () => {
  try {
    const resp = await fetch(`${process.env.API_URL}/api/v1/profile/others`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchYearbookProfiles = async () => {
  try {
    const resp = await fetch(`${process.env.API_URL}/api/v1/profile`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};
