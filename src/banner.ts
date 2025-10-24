export const getBanner = (env?: Record<string, string>) => {
  const envVars = env || import.meta.env;
  return `// ==UserScript==
// @name          ${envVars.VITE_NAME}
// @namespace     http://tampermonkey.net/
// @version       ${Date.now()}
// @description   Enhance your Github experience with additional features.
// @author        Jossafossa
// @match         ${envVars.VITE_MATCH_URL}
// @icon          https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant         nones
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_registerMenuCommand
// @downloadURL   ${envVars.VITE_GITHUB_URL}/refs/heads/master/dist/index.js
// @updateURL     ${envVars.VITE_GITHUB_URL}/refs/heads/master/dist/index.js
// ==/UserScript==

`;
};
