import {observable, action} from 'mobx';

class Store {

  @observable
  page = `home`

  @observable
  name = `msk`

  @action
  setPage = page => {
    this.page = page;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
