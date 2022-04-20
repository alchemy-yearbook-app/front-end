export async function fetchGithubTeams() {
  const resp = await fetch(
    'https://alchemy-yearbook-app-2.herokuapp.com/api/v1/orgs/alchemycodelab/teams/students/teams'
  );
  const data = await resp.json();
  return data;
}

export async function fetchYearbook() {
  const resp = await fetch(
    'https://alchemy-yearbook-app-2.herokuapp.com/api/v1/profile'
  );
  const data = await resp.json();
  console.log('data', data);
  return data;
}
