export const loginWithGitHub = async () => {
  window.location.replace(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scopes=read:user`
  );
};

// no profile
// exchange code on front end
