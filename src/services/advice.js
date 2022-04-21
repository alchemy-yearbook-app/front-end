// import { data } from 'autoprefixer';

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
  const data = await res.json;
  return data;
};

export const getAdvice = async () => {
  const resp = await fetch(`${process.env.API_URL}/api/v1/advice`);
  const data = await resp.json();
  console.log('resp', resp);
  return data;
};
