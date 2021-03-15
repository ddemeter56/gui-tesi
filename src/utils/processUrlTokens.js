export const urlParsedParams = {};

export function processUrlTokens() {
  console.log('processUrl has been called!');
  window.location.hash.split('&')
    .forEach(param => {
      const parts = param.split('=');
      urlParsedParams[parts[0].replace('#', '')] = parts[1];
    });

  if (urlParsedParams.access_token) {
    window.localStorage.setItem('token_requested_at', String(Date.now()));

    Object.keys(urlParsedParams).forEach((urlParamKey) => {
      window.localStorage.setItem(urlParamKey, urlParsedParams[urlParamKey]);
    });

    // Emiatt a sor miatt kétszer tölti a router az oldalt!
    window.location.href = window.location.href.split('#')[0];
  } else {
    console.log('NO TOKEN, processUrlTokens');
    if (window.localStorage.getItem('access_token')) {
      const tokenRequestedAt = window.localStorage.getItem('token_requested_at');
      const tokenValidity = 900 * 1000;
      const now = Date.now();

      if ((now - tokenRequestedAt) >= tokenValidity) {
        // Only needed in vanilla JS cuz this runs before the page is initialized, add this to created hook of production app
        setTimeout(() => {
          logout();
        }, 100);
      }
    }
  }
}

function redirectToLogin() {
  window.location.href =
    "http://localhost:8080/auth/realms/Tesi/protocol/openid-connect/auth?response_type=token&client_id=browser-login&redirect_uri=http://localhost/login-test.html&login=true&scope=openid&nonce=" + Date.now();
};

function logout() {
  window.localStorage.clear();
  window.location.href = "http://localhost:8080/auth/realms/Tesi/protocol/openid-connect/logout?client_id=browser-login&redirect_uri=http://localhost:5000";
};