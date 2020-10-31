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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = __importStar(require('react'));
var auth0_spa_js_1 = require('@auth0/auth0-spa-js');
var auth0_context_1 = __importDefault(require('./auth0-context'));
var utils_1 = require('./utils');
var reducer_1 = require('./reducer');
var auth_state_1 = require('./auth-state');
/**
 * @ignore
 */
var toAuth0ClientOptions = function (opts) {
  var clientId = opts.clientId,
    redirectUri = opts.redirectUri,
    maxAge = opts.maxAge,
    validOpts = __rest(opts, ['clientId', 'redirectUri', 'maxAge']);
  return __assign(__assign({}, validOpts), {
    client_id: clientId,
    redirect_uri: redirectUri,
    max_age: maxAge,
    auth0Client: {
      name: 'auth0-react',
      version: __VERSION__,
    },
  });
};
/**
 * @ignore
 */
var toAuth0LoginRedirectOptions = function (opts) {
  if (!opts) {
    return;
  }
  var redirectUri = opts.redirectUri,
    validOpts = __rest(opts, ['redirectUri']);
  return __assign(__assign({}, validOpts), { redirect_uri: redirectUri });
};
/**
 * @ignore
 */
var defaultOnRedirectCallback = function (appState) {
  window.history.replaceState(
    {},
    document.title,
    (appState === null || appState === void 0 ? void 0 : appState.returnTo) ||
      window.location.pathname
  );
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   redirectUri={window.location.origin}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
var Auth0Provider = function (opts) {
  var children = opts.children,
    skipRedirectCallback = opts.skipRedirectCallback,
    _a = opts.onRedirectCallback,
    onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a,
    clientOpts = __rest(opts, [
      'children',
      'skipRedirectCallback',
      'onRedirectCallback',
    ]);
  var client = react_1.useState(function () {
    return new auth0_spa_js_1.Auth0Client(toAuth0ClientOptions(clientOpts));
  })[0];
  var _b = react_1.useReducer(reducer_1.reducer, auth_state_1.initialAuthState),
    state = _b[0],
    dispatch = _b[1];
  react_1.useEffect(
    function () {
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var appState, user, error_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(utils_1.hasAuthParams() && !skipRedirectCallback))
                  return [3 /*break*/, 2];
                return [4 /*yield*/, client.handleRedirectCallback()];
              case 1:
                appState = _a.sent().appState;
                onRedirectCallback(appState);
                return [3 /*break*/, 4];
              case 2:
                return [4 /*yield*/, client.checkSession()];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [4 /*yield*/, client.getUser()];
              case 5:
                user = _a.sent();
                dispatch({ type: 'INITIALISED', user: user });
                return [3 /*break*/, 7];
              case 6:
                error_1 = _a.sent();
                dispatch({ type: 'ERROR', error: utils_1.loginError(error_1) });
                return [3 /*break*/, 7];
              case 7:
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [client, onRedirectCallback, skipRedirectCallback]
  );
  var loginWithRedirect = react_1.useCallback(
    function (opts) {
      return client.loginWithRedirect(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var loginWithPopup = react_1.useCallback(
    function (options, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              dispatch({ type: 'LOGIN_POPUP_STARTED' });
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4 /*yield*/, client.loginWithPopup(options, config)];
            case 2:
              _a.sent();
              return [3 /*break*/, 4];
            case 3:
              error_2 = _a.sent();
              dispatch({ type: 'ERROR', error: utils_1.loginError(error_2) });
              return [2 /*return*/];
            case 4:
              return [4 /*yield*/, client.getUser()];
            case 5:
              user = _a.sent();
              dispatch({ type: 'LOGIN_POPUP_COMPLETE', user: user });
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var logout = react_1.useCallback(
    function (opts) {
      if (opts === void 0) {
        opts = {};
      }
      client.logout(opts);
      if (opts.localOnly) {
        dispatch({ type: 'LOGOUT' });
      }
    },
    [client]
  );
  var getAccessTokenSilently = react_1.useCallback(
    function (opts) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, client.getTokenSilently(opts)];
            case 1:
              token = _a.sent();
              return [3 /*break*/, 3];
            case 2:
              error_3 = _a.sent();
              throw utils_1.tokenError(error_3);
            case 3:
              return [4 /*yield*/, client.getUser()];
            case 4:
              user = _a.sent();
              dispatch({ type: 'GET_TOKEN_COMPLETE', user: user });
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getAccessTokenWithPopup = react_1.useCallback(
    function (opts, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, client.getTokenWithPopup(opts, config)];
            case 1:
              token = _a.sent();
              return [3 /*break*/, 3];
            case 2:
              error_4 = _a.sent();
              throw utils_1.tokenError(error_4);
            case 3:
              return [4 /*yield*/, client.getUser()];
            case 4:
              user = _a.sent();
              dispatch({ type: 'GET_TOKEN_COMPLETE', user: user });
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getIdTokenClaims = react_1.useCallback(
    function (opts) {
      return client.getIdTokenClaims(opts);
    },
    [client]
  );
  return react_1.default.createElement(
    auth0_context_1.default.Provider,
    {
      value: __assign(__assign({}, state), {
        getAccessTokenSilently: getAccessTokenSilently,
        getAccessTokenWithPopup: getAccessTokenWithPopup,
        getIdTokenClaims: getIdTokenClaims,
        loginWithRedirect: loginWithRedirect,
        loginWithPopup: loginWithPopup,
        logout: logout,
      }),
    },
    children
  );
};
exports.default = Auth0Provider;
//# sourceMappingURL=auth0-provider.js.map
