import { axios2 } from "../http-common";

class ContactoService {
  getAll() {
    return axios2.get("/usuarios");
  }

  create(data) {
    return axios2.post("/usuarios", data);
  }

  delete(id) {
    return axios2.delete(`/usuarios/${id}`);
  }

  /**
   * Asocia una lista de tutoriales a un usuario
   * @param {string} userId - ID del usuario
   * @param {string[]} tutorialIds - Lista de IDs de tutoriales a asociar
   * @returns {Promise} - Promesa con la respuesta del servidor
   */
  assignTutorials(userId, tutorialIds) {
    return axios2.put(`/usuarios/${userId}/tutoriales`, tutorialIds);
  }
}

export default new ContactoService();
