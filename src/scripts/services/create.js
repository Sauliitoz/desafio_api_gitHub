import { baseUrl } from "../variables/variables.js";


async function create(userName) {
    try {
      const responseEvents = await fetch(`${baseUrl}/${userName}/events`);
      const events = await responseEvents.json();

      const createEvents = events.filter((event) => event.type === "CreateEvent");

      if (createEvents.length === 0) {
        document.querySelector(".erro").innerHTML = ` Nothing to show here 😢`;
      }

      createEvents.forEach((createEvent) => {
        const dataEvents = createEvent.repo.name;
        let dataCommit = "";
  
        if (!createEvent.payload.hasOwnProperty("commits")) {
          dataCommit = `No commit message`;
        }
  
        let showCreateData = document.querySelector(".showCreate");
        showCreateData.innerHTML += `<li>${dataEvents} - ${dataCommit}</li>`;
      });
    } catch (error) {
      console.error("Error fetching CreateEvent events", error);
    }
  }
  export {create}