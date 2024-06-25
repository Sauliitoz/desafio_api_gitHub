import { baseUrl, urlQuantity } from "../variables/variables.js";

async function pushAndCreate(userName) {
  const responseEvents = await fetch(
    `${baseUrl}/${userName}/events?per_page=${urlQuantity}`);
  const eventsPushCreate = await responseEvents.json();
  return eventsPushCreate.filter((event) => event.type === "PushEvent" || event.type === "CreateEvent").slice(0, urlQuantity);
   
}


export { pushAndCreate };
