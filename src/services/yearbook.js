export async function fetchGithubTeams() {
  const resp = await fetch(
    // 'https://alchemy-yearbook-app.herokuapp.com/alchemycodelab/teams/students/teams'
    'http://localhost:7890/api/v1/profile'
  );
  const data = await resp.json();
  console.log('data', data);
  return data;
}
