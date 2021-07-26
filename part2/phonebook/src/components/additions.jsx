import axios from "axios";

const addMore = (newContent) => {
  return axios
    .post("http://localhost:3001/persons", newContent)
    .then(({ data }) => data);
};

const getAll = () => {
  return axios.get("http://localhost:3001/persons").then(({ data }) => data);
};

const update = (id, newObject) => {
  return axios
    .put(`http://localhost:3001/persons/${id}`, newObject)
    .then(({ data }) => data);
};
const deletePerson = (id) => {
  return axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(({ data }) => data);
};

export default { addMore, getAll, update, deletePerson };
