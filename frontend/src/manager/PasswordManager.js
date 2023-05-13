import { makeAutoObservable} from "mobx";

export default class PasswordManager {
  constructor() {
    this._categories = [];
    this._passwords = [];
    this._selectedCategory = {};
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setPasswords(passwords) {
    this._passwords = passwords;
  }

  setSelectedCategory(category){
    this._selectedCategory = category;
  }

  get categories() {
    return this._categories;
  }

  get passwords() {
    return this._passwords;
  }

  get selectedCategory() {
    return this._selectedCategory;
  }
}