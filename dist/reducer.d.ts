import { AuthState, User } from './auth-state';
declare type Action =
  | {
      type: 'LOGIN_POPUP_STARTED';
    }
  | {
      type: 'INITIALISED' | 'LOGIN_POPUP_COMPLETE' | 'GET_TOKEN_COMPLETE';
      user?: User;
    }
  | {
      type: 'LOGOUT';
    }
  | {
      type: 'ERROR';
      error: Error;
    };
/**
 * Handles how that state changes in the `useAuth0` hook.
 */
export declare const reducer: (state: AuthState, action: Action) => AuthState;
export {};
//# sourceMappingURL=reducer.d.ts.map
