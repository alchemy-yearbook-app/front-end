export const createAdvice = async ({ title, advice, alumni_name, cohort }) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/advice/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      title,
      advice,
      alumni_name,
      cohort,
    }),
  });
  console.log('res.json()', res.json());
  return res.json();
};
