import config from "../config";

const ApiService = {
  getStats() {
    return fetch(`https://secret-plains-91249.herokuapp.com/api/data`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getCountryStats() {
    return fetch(`${config.API_ENDPOINT}cases_by_country.php`, {
      headers: {
        "x-rapidapi-key": "1a1be97d04mshbe3d58ed0ab5d88p18e413jsn315bd9d1e1f0",
        "Content-Type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getNews() {
    return fetch(
      `http://newsapi.org/v2/top-headlines?q=coronavirus&language=en`,
      {
        headers: {
          "X-Api-Key": "09411918d0154dedb2f4aae834b7ff68",
          "Content-Type": "application/json"
        }
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getInfoStatements() {
    return fetch(`https://secret-plains-91249.herokuapp.com/api/info`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ApiService;
