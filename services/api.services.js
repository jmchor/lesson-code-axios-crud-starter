// services/api.service.js

const axios = require('axios');

class ApiService {
        constructor() {
                this.api = axios.create({
                        baseURL: 'https://ih-crud-api.herokuapp.com',
                });
        }

        getAllCharacters = () => this.api.get('/characters');

        getOneCharacter = (characterId) => this.api.get(`/characters/${characterId}`);

        createCharacter = (characterInfo) => this.api.post(`/characters`, characterInfo);

        editCharacter = (characterId, characterInfo) => this.api.put(`/characters/${characterId}`, characterInfo);

        deleteCharacter = (characterId) => this.api.delete(`/characters/${characterId}`);
}

module.exports = ApiService;
