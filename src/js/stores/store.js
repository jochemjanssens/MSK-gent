import {observable, action} from 'mobx';

import BlogItem from '../models/BlogItem';

import blogAPI from '../lib/api/blog';

class Store {

  constructor() {
    this.init();
  }

  init = () => {
    blogAPI.select()
      .then(({blogs}) => {
        this._add(...blogs);
      });
  }

  @observable
  page = `home`

  @observable
  name = `msk`

  @observable
  blogItems = []

  @observable
  currentBlogItem = ``

  @action
  setPage = page => {
    this.page = page;
  }

  @action
  _add = (...blogs) => {
    blogs.forEach(b => {
      this.blogItems.push(new BlogItem(b));
    });
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
