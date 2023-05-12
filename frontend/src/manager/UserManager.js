import { makeAutoObservable} from "mobx";

export default class UserManager {
  constructor() {
    this._isAuth = false;
    this._user = {}
    this._token = "";
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}