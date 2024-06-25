import { urlGit } from "../variables/variables.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `
        <div class="info">
          <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
          <div class="data">
            <h1>${user.name ?? "Não possui nome cadastrado. 😭"}</h1>
            <p>${user.bio ?? "Não possui bio cadastrada. 😭"}</p>
            <h3><a href="${urlGit}${
              user.login
            }?tab=followers" target="_blank">Seguidores: ${
      user.followers
    }</a></h3>
            <h3><a href="${urlGit}${
              user.login
            }?tab=following" target="_blank">Seguindo: ${
      user.following
    }</a></h3>
          </div>
        </div>`;

    let repositoriesItems = "";
    user.repositories.forEach((repo) => {
      repositoriesItems += `
          <li>
            <a href="${repo.html_url}" target="_blank">${repo.name}
              <ul>
                <li>🍴${repo.forks}</li>
                <li>⭐${repo.stargazers_count}</li>
                <li>👀${repo.watchers}</li>
                <li>💻${repo.language}</li>
              </ul>
            </a>
          </li>`;
    });

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
          <div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItems}</ul>
          </div>`;
    }

    let eventsPush = "";
    let eventsCreate ="";
    user.pushCreate.forEach((event) => {
      let type = event.type;
      let commits = event.payload.commits;

      if (type === "PushEvent") {
        eventsPush += `<li>${type}: ${event.repo.name} - ${commits[0].message}</li>`;
      } else {
        eventsCreate += `<li>${type}: ${event.repo.name} - Sem mensagem de commit</li>`;
      }
    });

    if (user.pushCreate.length > 0) {
      this.userProfile.innerHTML += `         <div class="events">
                                                 <h3>Eventos</h3>
                                                 <ul>${eventsPush}</ul>
                                                 <ul>${eventsCreate}</ul>  
                                              </div>`;
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    this.pushCreate.innerHTML ="<h3 class=events >Nenhum repositório encontrado</h3>";
  },
};

export { screen };
