import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";

import { pushAndCreate } from "./services/events.js";

//objects
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

//usando o input + botão para enviar o userName
document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  if (validateEmptyInput(userName)) return;
  getUserData(userName);
});
//continuação do item a cima
document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
});
//validação de valor digitado no campo imput
function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub");
    return true;
  }
}
//validação sobre o campo imput em branco
async function getUserData(userName) {
  const userResponse = await getUser(userName); //pegar usuário digitado

  if (userResponse.message === "Not Found") {
    screen.renderNotFund();
    return;
  }

  const repositoriesResponse = await getRepositories(userName); //pegar repositório do usuário
  const pushCreateResponse = await pushAndCreate(userName); //pegar push .json

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  user.setEvents(pushCreateResponse); //setar no user.js
  screen.renderUser(user);
}

export { getUserData };
