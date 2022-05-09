import { action, makeAutoObservable, observable } from 'mobx';

//define store class which will be used to store data, add extra states here

class Store {
  //define your data here
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
  //you can add functions to manipulate data here
}

export const store = new Store();
