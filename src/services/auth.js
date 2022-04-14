export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/github/me`, {
      credentials: 'include',
    });
    return res.json();
  } catch (error) {
    return null;
  }
};
