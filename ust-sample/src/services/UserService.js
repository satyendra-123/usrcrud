import http from "../http-common";

const url = {
  user: `user`
}

const getAll = () => {
  return http.get(`${url.user}`);
};

const get = id => {
  return http.get(`${url.user}/${id}`);
};

const create = data => {
  return http.post(`${url.user}`, data);
};

const update = (id, data) => {
  return http.put(`${url.user}/${id}`, data);
};

const remove = id => {
  return http.delete(`${url.user}/${id}`);
};



export default {
  getAll,
  get,
  create,
  update,
  remove
};


