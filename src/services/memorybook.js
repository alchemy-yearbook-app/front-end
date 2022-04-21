export async function fetchMemory() {
  const resp = await fetch(`${process.env.API_URL}/api/v1/memorybook`, {
    credentials: 'include',
  });
  const data = await resp.json();
  return data;
}

export const createMemory = async ({
  cohortId,
  imageUrl,
  audio,
  text,
  resource_url,
}) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/memorybook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify({
      cohortId,
      imageUrl,
      audio,
      text,
      resource_url,
    }),
  });
  const data = await res.json();
  return data;
};
