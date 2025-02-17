import http from "../http-common";

class ContactoService {
  getAll() {
    return http.get("/usuarios");
  }

  create(data) {
    return http.post("/usuarios", data);
  }

  get(id) {
    return http.get(`/usuarios/${id}`);
  }



//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

  delete(id) {
    return http.delete(`/usuarios/${id}`);
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