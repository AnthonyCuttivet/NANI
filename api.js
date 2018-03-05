
const rootEndpoint = "https://api.myjson.com/bins/10k181";

export const getPlayers = () =>
  fetch(`${rootEndpoint}`, { headers }).then(
    ({ status, json }) => {
      if (status !== 200)
        throw new Error(`API answered with status code ${status}`); // gestion du status code HTTP
      else return json(); // on parse la réponse en JSON
    }
  );