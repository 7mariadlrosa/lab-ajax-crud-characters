class APIHandler {
  constructor(baseURL) {
    this.axiosApp = axios.create({
      baseURL: baseURL
    })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/characters/${characterId}`)
  }

  createOneRegister(characterInfo) {
    return this.axiosApp.post(`/characters`, characterInfo);
  }

  updateOneRegister(characterId, characterInfo) {
    return this.axiosApp.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister(characterId) {
    return this.axiosApp.delete(`/characters/${characterId}`);
  }
}