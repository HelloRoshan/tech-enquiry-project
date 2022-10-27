import axios from "axios"
const instance = axios.create({
    baseURL: "https://api.studyproject.one",
    
    headers: {
      "Content-Type": "application/json",
    },
  });
  