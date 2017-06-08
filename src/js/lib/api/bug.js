import fetch from 'isomorphic-fetch';
const url = `/api/bugs`;

export default {
  insert: text => {
    const method = `POST`;
    const body = new FormData();
    body.append(`text`, text);

    return fetch(url, {method, body})
      .then(r => r.json());
  }
};
