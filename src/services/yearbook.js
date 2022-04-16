export async function fetchGithubTeams() {
  const resp = await fetch(
    'https://alchemy-yearbook-app.herokuapp.com/alchemycodelab/teams/students/teams'
  );
  const data = await resp.json();
  return data;
}
