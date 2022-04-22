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
  const data = await res.json();
  return data;
};

export const getAdvice = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/advice`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
    });
    const advice = await res.json();
    return advice;
  } catch (error) {
    return null;
  }
};
