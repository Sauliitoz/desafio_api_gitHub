const screen = {
userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                      <div class="data">
                                        <h1>${user.name ?? "Não possui nome cadastrado 😭"}</h1>
                                        <p>${user.bio ?? "Não possui bio cadastrado 😭"}</p>
                                      </div>
                                      <div class="follow">
                                        <p><a href="https://github.com/${user.login}?tab=followers" target="_blank" >Seguidores: ${user.followers}</a></p>
                                        <p><a  href="https://github.com/${user.login}?tab=following" target="_blank" >Seguindo: ${user.following}</a></p>
                                      </div>
                                    </div>`;
    let repositoriesItens = "";
    user.repositories.forEach((repo) =>
      (repositoriesItens += ` <li>
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                <p>🍴: ${repo.forks_count}</p>
                                <p>⌨️: ${repo.language}</p>
                                <p>⭐: ${repo.stargazers_count}</p>
                                <p>👀: ${repo.watchers_count}</p>
                              </li>`));
    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
              <div class="repositories section">
                  <h2>Repositórios</h2>
                      <ul>${repositoriesItens}</ul>
              </div>`;
    }
    
  },

  renderNotFund() {
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
  },
};


//eventos
// 

export { screen };

