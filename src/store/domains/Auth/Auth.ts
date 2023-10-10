import { makeObservable, action, observable } from 'mobx';
import { api } from '@api/network';
import { StatusCodes } from '@common/constants';

export class Auth {
  authJWT: string | null = null;
  isAuthorized: boolean = false;

  constructor() {
    makeObservable(this, {
      authJWT: observable,
      isAuthorized: observable,
      setAuthJWT: action,
      setIsAuthorized: action
    });
  }

  setAuthJWT(authJWT: string): void {
    this.authJWT = authJWT;
  }

  setIsAuthorized(isAuthorized: boolean): void {
    this.isAuthorized = isAuthorized;
  }

  setAuth(authJWT: string): void {
    this.authJWT = authJWT;
    this.setAuthInterceptors();
    this.setIsAuthorized(true);
  }

  setAuthInterceptors(): void {
    api.interceptors.request.use(
      (config) => {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${this.authJWT}`
        };

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === StatusCodes.Unathorized) {
          this.setIsAuthorized(false);
        }

        return Promise.reject(error);
      }
    );
  }
}
