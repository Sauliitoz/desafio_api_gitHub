const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  repositories: [],
  push:[],
  create:[],

  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.login;
    this.following = gitHubUser.following;
    this.followers = gitHubUser.followers;
    this.login = gitHubUser.login;
  },

  setRepositories(repositories) {
    this.repositories = repositories;
  },

};

export { user };

