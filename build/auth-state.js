'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * The initial auth state.
 */
exports.initialAuthState = {
  isAuthenticated: false,
  // In SSR mode the library will never check the session, so loading should be initialised as false
  isLoading: typeof window !== 'undefined',
};
//# sourceMappingURL=auth-state.js.map
