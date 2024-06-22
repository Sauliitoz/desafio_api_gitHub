const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                    <div class="data">
                                        <h1>${user.name??"Não possui nome cadastrado 😭"}</h1>
                                        <p>${user.bio??"Não possui bio cadastrado 😭"}</p>
                                        <h3><a href="https://github.com/${user.login}?tab=followers" target="_blank" >Seguidores: ${user.followers}</a></h3>
                                      <h3><a href="https://github.com/${user.login}?tab=following" target="_blank" >Seguindo: ${user.following}</a></h3>
                                    
                                  </div>`;
    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += ` <li>
                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                      <ul>
                                        <li>🍴${repo.forks} </li>
                                        <li>⭐${repo.stargazers_count} </li>
                                        <li>👀${repo.watchers} </li>
                                        <li>💻${repo.language} </li>
                                      </ul>
                                    </a>    
                                </li>`)
    );
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

export { screen };
