import {axios2} from "../http-common";

class ContactoService {
  getAll() {
    return axios2.get("/usuarios");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

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