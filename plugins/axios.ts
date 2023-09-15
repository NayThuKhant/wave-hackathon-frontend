import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          // "Authorization": `Bearer ${localStorage.getItem('userToken')}`
      }
    },
  });
return {
    provide: {
      axios: api,
    },
  };
});
