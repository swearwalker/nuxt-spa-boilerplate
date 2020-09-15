export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`${resource}`);
  },

  list() {
    return $axios.$get(`${resource}/list`);
  },

  upload(data, header) {
    return $axios.$post(`${resource}`, data, header);
  },

  show(id) {
    return $axios.$get(`${resource}/${id}`);
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload);
  },

  update(id, payload) {
    return $axios.$put(`${resource}/${id}`, payload);
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`);
  },
});
