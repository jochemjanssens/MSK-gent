export default class Artist {

  id = ``
  created = 0
  name = ``
  text = ``
  nameValue = ``

  constructor(content) {
    this.nameValue = content.nameValue;
    this.name = content.name;
    this.text = content.text;
    this.id = content._id;
    this.created = Date.now();
  }
}
