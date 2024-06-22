import { baseUrl, urlQuantity } from "../variables/variables.js";

async function push(userName) {
    
      const responseEvents = await fetch(`${baseUrl}/${userName}/events?per_page=${urlQuantity}`);
      const event = await responseEvents.json();

      const pushEvents = event.filter((event) => event.type === "PushEvent");

      if (pushEvents.length === 0) {
        document.querySelector(".error").innerHTML = ` Nothing to show here 😢`;
      }
      let lastCommit = {};
  
      pushEvents.forEach((push) => {
        const commit = push.payload.commits[push.payload.commits.length - 1];
  
        if (commit) {
          lastCommit[push.repo.name] = commit.message;
        }
      });
  
      let commitsHtml = Object.entries(lastCommit).map(
        ([nameRepo, lastComit]) => `<li>${nameRepo} - ${lastComit}</li>`
      );
  
      document.querySelector(".showPush").innerHTML = commitsHtml.join(" ");
    
  }

  

  export{push}