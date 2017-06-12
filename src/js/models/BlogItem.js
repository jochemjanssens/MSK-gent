export default class BlogItem {

  id = ``
  created = 0
  title = ``
  text = ``
  artist = ``
  imageUrl = ``

  constructor(content) {
    this.title = content.title;
    this.text = content.text;
    this.imageUrl = content.imageUrl;
    this.artist = content.artist;
    this.id = content._id;
    this.created = Date.now();
  }
}
