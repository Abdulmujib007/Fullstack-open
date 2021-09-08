/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const addMore = (newContent) => {
  return axios
    .post("/api/persons", newContent)
    .then(({ data }) => data);
};

const getAll = () => {
  return axios.get("/api/persons").then(({ data }) => data);
};

const update = (id, newObject) => {
  return axios
    .put(`/api/persons/${id}`, newObject)
    .then(({ data }) => data);
};
const deletePerson = (id) => {
  return axios
    .delete(`/api/persons/${id}`)
    .then(({ data }) => data);
};

export default { addMore, getAll, update, deletePerson };

