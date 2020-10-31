'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var auth_state_1 = require('./auth-state');
/**
 * @ignore
 */
var stub = function () {
  throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */
var initialContext = __assign(__assign({}, auth_state_1.initialAuthState), {
  getAccessTokenSilently: stub,
  getAccessTokenWithPopup: stub,
  getIdTokenClaims: stub,
  loginWithRedirect: stub,
  loginWithPopup: stub,
  logout: stub,
});
/**
 * The Auth0 Context
 */
var Auth0Context = react_1.createContext(initialContext);
exports.default = Auth0Context;
//# sourceMappingURL=auth0-context.js.map
