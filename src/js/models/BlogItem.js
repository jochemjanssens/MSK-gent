export default class BlogItem {

  id = ``
  created = 0
  title = ``
  text = ``
  imageUrl = ``

  constructor(content) {
    this.title = content.title;
    this.text = content.text;
    this.imageUrl = content.imageUrl;
    this.id = content._id;
    this.created = Date.now();
  }
}
