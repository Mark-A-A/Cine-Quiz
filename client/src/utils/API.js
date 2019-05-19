import * as axios from "axios";

export const API = {
  getAllCharacters: async ()=>{
    return axios.get("/api/characters");
  },
  submitAnswers: function(query) {
    return axios.post("/api/quiz/answers", { params: { q: query } });
  }
}