export default class Artist {

  id = ``
  created = 0
  name = ``
  firstname = ``
  text = ``
  artist = ``
  nameValue = ``
  liveyears = ``
  handle = ``
  bio = ``

  constructor(content) {
    this.nameValue = content.nameValue;
    this.name = content.name;
    this.firstname = content.firstname;
    this.text = content.text;
    this.artist = content.artist;
    this.id = content._id;
    this.liveyears = content.liveyears;
    this.handle = content.handle;
    this.bio = content.bio;
    this.created = Date.now();
  }
}
