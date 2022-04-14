export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/profile`, {
      credentials: 'include',
    });
    return res.json();
  } catch (error) {
    return null;
  }
};
