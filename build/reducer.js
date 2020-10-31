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
/**
 * Handles how that state changes in the `useAuth0` hook.
 */
exports.reducer = function (state, action) {
  switch (action.type) {
    case 'LOGIN_POPUP_STARTED':
      return __assign(__assign({}, state), { isLoading: true });
    case 'LOGIN_POPUP_COMPLETE':
    case 'INITIALISED':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
        isLoading: false,
        error: undefined,
      });
    case 'GET_TOKEN_COMPLETE':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
      });
    case 'LOGOUT':
      return __assign(__assign({}, state), {
        isAuthenticated: false,
        user: undefined,
      });
    case 'ERROR':
      return __assign(__assign({}, state), {
        isLoading: false,
        error: action.error,
      });
  }
};
//# sourceMappingURL=reducer.js.map
