import {makeAutoObservable} from "../_snowpack/pkg/mobx.js";
class Store {
  constructor() {
    this.count = 0;
    makeAutoObservable(this);
  }
}
export const store = new Store();
