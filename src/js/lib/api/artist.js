import fetch from 'isomorphic-fetch';
const url = `/api/artists`;

export default {
  selectByName: name => {
    return fetch(`${url}?nameValue=${name}`)
      .then(r => r.json());
  }
};
