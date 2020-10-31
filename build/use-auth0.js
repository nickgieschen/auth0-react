'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('react');
var auth0_context_1 = __importDefault(require('./auth0-context'));
/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 */
var useAuth0 = function () {
  return react_1.useContext(auth0_context_1.default);
};
exports.default = useAuth0;
//# sourceMappingURL=use-auth0.js.map
