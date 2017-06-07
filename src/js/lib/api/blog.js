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
  }
};
