import {observable, action} from 'mobx';

import BlogItem from '../models/BlogItem';
import Artist from '../models/Artist';

import blogAPI from '../lib/api/blog';
import artistAPI from '../lib/api/artist';

class Store {

  constructor() {
    this.init();
  }

  init = () => {
    /*Blog ophalen*/
    blogAPI.select()
      .then(({blogs}) => {
        this._add(...blogs);
      });

    /* Artiest ophalen, ensor is standaard als fallback */
    this.setArtist(`ensor`);
    if (localStorage.getItem(`artist`)) {
      this.artist = localStorage.getItem(`artist`);
    }
  }

  @observable
  page = `home`

  @observable
  artist = ``

  @observable
  artistData = ``

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
  setArtist = artist => {
    this.artist = artist;
    localStorage.setItem(`artist`, artist);
    artistAPI.selectByName(artist)
      .then(({artists}) => {
        this.artistData = new Artist(artists[0]);
      });
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
