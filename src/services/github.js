export async function fetchGithubUser() {
  const resp = await fetch(
    'https://alchemy-yearbook-app-2.herokuapp.com/api/v1/profile'
  );
  const data = await resp.json();
  console.log('data', data);
  return data;
}
