import { baseUrl, urlQuantity } from "../variables/variables.js";

async function getRepositories(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/repos?per_page=${urlQuantity}`
  );
  return await response.json();
}

export { getRepositories };

