function login(username, password) {
  const body = {
    'email': username,
    'password1': password,
  };

  const options = {
    method: 'POST',
    form: true,
    url: `https://www.latlong.net/user/login`,
    body,
    retryOnStatusCodeFailure: true,
  };

  return options;
}

export default login;
