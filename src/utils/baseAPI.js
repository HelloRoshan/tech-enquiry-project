import axios from "axios"
const instance = axios.create({
    baseURL: "http://api.studyproject.one",
    
    headers: {
      "Content-Type": "application/json",
    },
  });