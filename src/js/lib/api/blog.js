import fetch from 'isomorphic-fetch';
const url = `/api/blogs`;

export default {
  select: () => {
    return fetch(`${url}?isActive=true`)
      .then(r => r.json());
  },

  selectById: id => {
    return fetch(`${url}/${id}`)
      .then(r => r.json());
  },

  insert: data => {
    const method = `POST`;
    const body = new FormData();
    body.append(`title`, data.title);
    body.append(`artist`, data.artist);
    body.append(`text`, data.text);
    body.append(`imageUrl`, data.pictureUrl);

    return fetch(url, {method, body})
      .then(r => r.json());
  },
};
