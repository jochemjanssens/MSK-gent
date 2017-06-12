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

    /* Artiest ophalen, ensor is standaard als fallback */
    this.setArtist(`ensor`);
    if (localStorage.getItem(`artist`)) {
      this.artist = localStorage.getItem(`artist`);
    }
    /*Blog ophalen*/
    blogAPI.select()
      .then(({blogs}) => {
        this._add(...blogs);
      })
      .then(() => {
        this.setFilteredBlogItems(this.artist);
      });




    /* Settings syncen met localStorage */
    if (localStorage.getItem(`pushnotification`)) {
      this.pushnotification = localStorage.getItem(`pushnotification`);
    }
    if (localStorage.getItem(`locationsharing`)) {
      this.locationsharing = localStorage.getItem(`locationsharing`);
    }
    this.speed = localStorage.getItem(`speed`);

    /* Check op wat soort device */
    if (navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ) {
      this.mobileDevice = true;
    }
    else {
      this.mobileDevice = false;
    }
  }

  @observable
  mobileDevice = ``

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

  @observable
  blogAdminImgSrc = `http://www.autolocators.ca/images/placeholder.gif`

  @observable
  filteredBlogItems = []

  @action
  setFilteredBlogItems = artist => {
    const newPosts = [];
    this.blogItems.forEach(item => {
      if (artist === item.artist) {
        newPosts.push(item);
      }
    });
    this.filteredBlogItems = newPosts;
  }

  @action
  addBlogAdminImgSrc = src => {
    this.blogAdminImgSrc = src;
  }

  @action
  newBlogItem = content => {
    console.log(content);
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

  /* Tour */
  @observable
  currentTourItem = 0

  @action
  updateCurrentTourItem = () => {
    this.tourStart = !this.tourStart;
    if (this.currentTourItem === ``) {
      this.currentTourItem === 0;
    }
    this.currentTourItem = this.currentTourItem + 1;
  }

  @observable
  currentTourText = ``

  @action
  setCurrentTourText = text => {
    this.currentTourText = text;
  }

  @observable
  nextTourText = ``

  @action
  setNextTourText = text => {
    this.nextTourText = text;
  }

  @observable
  tourStart = true;

  @action
  handleTourStart = () => {
    this.tourStart = !this.tourStart;
  }

  @observable
  stopTimer = false;

  @action
  handleStopTimer = () => {
    this.stopTimer = !this.stopTimer;
  }

  /* Tour */
  @observable
  tourItemDone = false

  @action
  handleTourItemDone = () => {
    this.tourItemDone = !this.tourItemDone;
  }

  @observable
  tourDone = false

  @action
  setTourDone = () => {
    this.tourDone = true;
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
