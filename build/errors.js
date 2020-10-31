'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */
var OAuthError = /** @class */ (function (_super) {
  __extends(OAuthError, _super);
  function OAuthError(error, error_description) {
    var _this = _super.call(this, error_description || error) || this;
    _this.error = error;
    _this.error_description = error_description;
    return _this;
  }
  return OAuthError;
})(Error);
exports.OAuthError = OAuthError;
//# sourceMappingURL=errors.js.map
