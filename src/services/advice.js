export const createAdvice = async ({ title, advice, alumniName, cohort }) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/advice/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      title,
      advice,
      alumniName,
      cohort,
    }),
  });
  console.log('res.json()', res.json());
  return res.json();
};

export const getAdvice = async () => {
  const resp = await fetch(
    'https://alchemy-yearbook-app-2.herokuapp.com/api/v1/advice'
  );
  const data = await resp.json();
  console.log('resp', resp);
  return data;
};
