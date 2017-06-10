import {observable, action} from 'mobx';

import BlogItem from '../models/BlogItem';
import Artist from '../models/Artist';

import blogAPI from '../lib/api/blog';
import artistAPI from '../lib/api/artist';
import bugAPI from '../lib/api/bug';

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

    /* Settings syncen met localStorage */
    if (localStorage.getItem(`pushnotification`)) {
      this.pushnotification = localStorage.getItem(`pushnotification`);
    }
    if (localStorage.getItem(`locationsharing`)) {
      this.locationsharing = localStorage.getItem(`locationsharing`);
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

  /*BOT DATA*/

  @observable
  currentBotId = 0;

  @action
  setCurrentBotId = currentBotId => {
    this.currentBotId = currentBotId;
  }

  @observable
  botContent = [];

  @action
  addContentToBot = newContent => {
    this.botContent.push(newContent);
  }

  @action
  setBug = bugText => {
    //
    bugAPI.insert(bugText);
  }

  @observable
  blogItems = []

  @observable
  currentBlogItem = ``

  @action
  newBlogItem = content => {
    blogAPI.insert(content)
      .then(response => {
        console.log(response);
      });
  }

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

  /* Settings */
  @observable
  speed = ``

  @action
  setSpeed = newSpeed => {
    this.speed = newSpeed;
    localStorage.setItem(`speed`, newSpeed);
  }

  @observable
  pushnotification = ``

  @action
  setPushnotification = pushnotificationValue => {
    this.pushnotification = pushnotificationValue;

    localStorage.setItem(`pushnotification`, this.pushnotification);
  }

  @observable
  locationsharing = ``

  @action
  setLocationsharing = locationValue => {
    this.locationsharing = locationValue;

    localStorage.setItem(`locationsharing`, this.locationsharing);
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
