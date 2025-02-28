import {axios2} from "../http-common";

class ContactoService {
  getAll() {
    return axios2.get("/usuarios");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  create(data) {
    return axios2.post("/usuarios", data);
  }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

  delete(id) {
    return axios2.delete(`/usuarios/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//  // findByTitle(title) {
//  //   return http.get(`/tutorials?title=${title}`);
//  // }
 
//  findByTitle(title) {
//      return http.get(`/tutorials/title/${title}`);
//    }
}

export default new ContactoService();