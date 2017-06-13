export default class Artist {

  id = ``
  created = 0
  name = ``
  text = ``
  artist = ``
  nameValue = ``
  liveyears = ``

  constructor(content) {
    this.nameValue = content.nameValue;
    this.name = content.name;
    this.text = content.text;
    this.artist = content.artist;
    this.id = content._id;
    this.liveyears = content.liveyears;
    this.created = Date.now();
  }
}
